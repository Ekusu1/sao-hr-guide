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
}) {
	var self        = this;
	self.dataType   = 'monster';
	self.template   = 'item-monster';
	self.id         = ko.observable(GH.newGuid());
	self.isTmp      = ko.observable(false);
	self.isNew      = ko.observable(false);
	self.locked     = ko.observable(DEFAULT_LOCK_STATUS);
	self.switchLock = ()=> self.locked(!self.locked());
	self.sortKey    = ko.pureComputed(()=>[
		GH.getSortNumber('stages', self.locations()[0].stage()),
		self.race(),
		self.family() || 'Z',
		GH.getSortNumber('monsterType', self.type()),
		self.name()
	].join('|'));

	self.locations      = ko.observableArray(newData.locations.map(data=>new LocationModel(data)));
	self.addLocation    = ()=>self.locations.push(new LocationModel());
	self.sortLocations  = function (location) {
		self.locations.sort((a, b)=> {
			a = GH.getSortNumber('stages', a.stage());
			b = GH.getSortNumber('stages', b.stage());
			return a == b ? 0 : a < b ? -1 : 1
		});
		location && location.setLast();
	};
	self.sortLocations();
	self.removeLocation = location=>self.locations.remove(location);

	self.type   = ko.observable(newData.type);
	self.race   = ko.observable(newData.race);
	self.family = ko.observable(newData.family);
	self.name   = ko.observable(newData.name);

	function cleanupDrops() {
		self.drops([...new Set(self.drops())]);
		self.drops.sort();
	}

	function getRaceDrops() { return GH.getOptions('monsterRaceDrops.' + self.race()); }

	function getRaceDropPrefix() { return GH.getOptions('monsterRaceDropPrefix.' + self.race()); }

	function hasDrop(drop) { return self.drops().includes(drop) }

	self.drops              = ko.observableArray(newData.drops);
	cleanupDrops();
	self.dropToAdd          = ko.observable(getRaceDropPrefix());
	self.hasMissingRaceDrop = ko.computed(()=>getRaceDrops().some(drop=>!hasDrop(drop)));
	self.dropRarity = drop=> {
		var result = 'CommonDrop';
		$.each(GH.getOptions('dropRarity'), (rarity, drops)=>{
			if (drops.includes(drop)) {
				result = rarity+"Drop";
				GH.getOptions('itemOre').includes(drop) && (result += " OreDrop");
				return false;
			}
		});
		return result;
	};
	self.dropInRaceDrops = drop=>getRaceDrops().includes(drop);
	self.addRaceDrops       = ()=> {
		getRaceDrops().forEach(drop=>!hasDrop(drop) && self.drops.push(drop));
		cleanupDrops();
	};
	self.addDrop            = ()=> {
		var drops     = self.drops,
		    dropToAdd = self.dropToAdd();
		(dropToAdd !== '' && !hasDrop(dropToAdd)) && drops.push(dropToAdd);
		cleanupDrops();
		self.dropToAdd(getRaceDropPrefix());
	};
	self.removeDrop         = drop=>self.drops.remove(drop);

	self.isNewMaterial  = ko.pureComputed(()=> GH.isNewOption('itemMaterial', self.dropToAdd()));
	self.addNewMaterial = function () {
		var OPTIONS = rootView.OPTIONS();
		OPTIONS.itemMaterial.push(self.dropToAdd());
		OPTIONS.itemMaterial = OPTIONS.itemMaterial.sort();
		rootView.OPTIONS(OPTIONS);
		// GH.saveData();
	};

	self.getDuplicateCheckData = ko.computed(()=>[
		self.name()
	].join('|'));
	self.isDuplicate           = ko.computed(()=>GH.findDuplicates(self).length > 0);

	self.hasMissingData = ko.pureComputed(()=>
		self.locations().some(m=>m.stage() == '') ||
		self.type() == '' ||
		self.race() == '' ||
		self.name() == '' ||
		self.family() == ''
	);

	self.additionalCss = ko.observable('');
	self.mediaCss      = ko.pureComputed(()=>`${self.isDuplicate() ? 'duplicateModel' : ''} ${self.additionalCss()} ${self.hasMissingData() ? 'hasMissingData' : ''}`);

	self.filter = function (filter) {
		if (filter.location !== undefined) {
			return self.locations().some(location=> {
				var results = []
				filter.location.area != undefined && results.push(location.area() == filter.location.area);
				filter.location.stage != undefined && results.push(location.stage() == filter.location.stage);
				return results.every(r=>r === true);
			});
		}
		return true;
	}

	self.export = ()=>({
		locations: self.locations().map(m=>m.export()),
		type:      self.type(),
		race:      self.race(),
		family:    self.family(),
		name:      self.name(),
		drops:     self.drops()
	});
}