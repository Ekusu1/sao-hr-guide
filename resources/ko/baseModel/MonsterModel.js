"use strict";

function MonsterModel(newData = {
	locations: [
		{
			area:  '',
			stage: ''
		}
	],
	type:      'M',
	race:      '',
	family:    '',
	name:      '',
	drops:     []
}){
	GH.pauseFilter('monster');
	//region base
	GH.modelBaseGenerator(this);
	var self = this;
	//endregion
	//region require (probably has to be edited!)
	self.dataType = 'monster';
	self.template = 'item-monster';
	self.sortKey  = ko.pureComputed(()=>[
		GH.getSortNumber('stages', self.locations()[0].stage()),
		self.race(),
		GH.getSortNumber('monsterType', self.type()),
		self.family() || 'Z',
		self.name()
	].join('|'));

	self.mediaCss = ko.pureComputed(()=>GH.mediaCssGenerator(self, [
		`bg-monster-${self.type().toLowerCase()}`
	]));

	self.hasMissingData        = ko.pureComputed(()=>
		self.locations().some(m=>m.stage() == '') ||
		self.type() == '' ||
		self.race() == '' ||
		self.name() == '' ||
		self.family() == ''
	);
	self.getDuplicateCheckData = ko.pureComputed(()=>[
		self.name()
	].join('|'));

	self.filter = filter=>{
		return self.locations().some(location=>{
			var results = [];
			if (filter.location.stage != '') {
				results.push(location.stage() == filter.location.stage);
			} else if (filter.location.area != '') {
				results.push(location.area() == filter.location.area);
			} else if (filter.location.area == '') {
				results.push(true);
			} else {
				results.push(false);
			}

			return results.every(r=>r === true);
		});
	};
	self.export = ()=>({
		locations: self.locations().map(m=>m.export()),
		type:      self.type(),
		race:      self.race(),
		family:    self.family(),
		name:      self.name(),
		drops:     self.drops()
	});
	//endregion
	//region model
	self.locations     = ko.observableArray(newData.locations.map(data=>new LocationModel(data)));
	self.locationsSorted = ko.pureComputed(()=>{
		self.sortLocations();
		var locations = [...new Set(self.locations())];
		var filter = rootView.FILTERS.getFilter().location;
		if (filter.area !== '' && filter.stage !== '') {
			var foundLocation = locations.find(location=>{
				if (
					(filter.stage != '' && (location.stage() === filter.stage)) ||
					(location.area() === filter.area)
				) {
					return true;
				}
			});
			if (foundLocation != undefined) {
				var index = locations.indexOf(foundLocation);
				var match = locations.splice(index, 1)[0];
				locations.unshift(match);
			}
		}
		return locations;
	});

	self.addLocation   = ()=>self.locations.push(new LocationModel());
	self.sortLocations = location=>{
		self.locations.sort((a, b)=>{
			a = GH.getSortNumber('stages', a.stage());
			b = GH.getSortNumber('stages', b.stage());
			return a == b ? 0 : a < b ? -1 : 1
		});
		location && location.setLast();
	};
	self.removeLocation = location=>self.locations.remove(location);

	self.type   = ko.observable(newData.type);
	self.race   = ko.observable(newData.race);
	self.family = ko.observable(newData.family);
	self.name   = ko.observable(newData.name);

	function cleanupDrops(){
		self.drops([...new Set(self.drops())]);
		self.drops.sort();
	}

	self.raceDrops = ko.pureComputed(()=>GH.getOptions('monsterRaceDrops.' + self.race()));
	self.drops     = ko.observableArray(newData.drops);
	self.dropToAdd = ko.observable(GH.getOptions('monsterRaceDropPrefix.' + self.race()));

	self.changeRace     = ()=>self.dropToAdd(GH.getOptions('monsterRaceDropPrefix.' + self.race()));
	self.isNewDrop      = drop=>{
		return drop !== '' && !self.drops().includes(drop) && !self.raceDrops().includes(drop)
	};
	self.dropRarity     = drop=>{
		var result = 'CommonDrop';
		$.each(GH.getOptions('dropRarity'), (rarity, drops)=>{
			if (drops.includes(drop)) {
				result = rarity + "Drop";
				GH.getOptions('itemOre').includes(drop) && (result += " OreDrop");
				return false;
			}
		});
		return result;
	};
	self.isRaceDrop     = drop=>self.raceDrops().includes(drop);
	self.addNewRaceDrop = drop=>{
		var OPTIONS = GH.getOptions();
		OPTIONS.monsterRaceDrops[self.race()].push(drop);
		OPTIONS.monsterRaceDrops[self.race()] = OPTIONS.monsterRaceDrops[self.race()].sort();
		rootView.OPTIONS(OPTIONS);
		self.drops.remove(drop);
	};
	self.addDrop        = ()=>{
		var dropToAdd = self.dropToAdd();
		self.isNewDrop(dropToAdd) && self.drops.push(dropToAdd);
		self.dropToAdd(GH.getOptions('monsterRaceDropPrefix.' + self.race()));
		cleanupDrops();
	};
	self.removeDrop     = drop=>self.drops.remove(drop);

	self.isNewMaterial  = ko.pureComputed(()=> GH.isNewOption('itemMaterial', self.dropToAdd()));
	self.addNewMaterial = ()=>{
		var OPTIONS = GH.getOptions();
		OPTIONS.itemMaterial.push(self.dropToAdd());
		OPTIONS.itemMaterial = OPTIONS.itemMaterial.sort();
		rootView.OPTIONS(OPTIONS);
	};

	self.loadMonsterAddLocation = ()=>{
		rootView.loadOriginalModel(self).addLocation();
	};

	self.sortLocations();
	cleanupDrops();
	//endregion
	GH.resumeFilter('monster');
}