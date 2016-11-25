"use strict";

function MonsterModel(data = {
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
	var self             = this;
	self.dataType        = 'monster';
	self.tmpType         = 'item-monster';
	self.id              = helpers.newGuid();
	self.sortKey         = ko.pureComputed(()=>[
		helpers.getSortNumber('stages', self.locations()[0].stage()),
		self.race(),
		self.family() || 'Z',
		helpers.getSortNumber('monsterType', self.type()),
		helpers.padNumber(self.locations()[0].lvMin()),
		helpers.padNumber(self.locations()[0].lvMax()),
		self.name()
	].join('|'));
	self.isNew           = ko.observable(false);
	self.locked          = ko.observable(false);
	self.switchLock      = ()=> self.locked(!self.locked());
	self.initContextmenu = ()=>$('#' + self.id).contextMenu({menuSelector: '#contextMenu-' + self.id});

	self.locations      = ko.observableArray(data.locations.map((v)=>new LocationModel(v)));
	self.addLocation    = ()=>self.locations.push(new LocationModel());
	self.sortLocations  = function (location) {
		location.setLast();
		self.locations.sort((a, b)=> {
			a = helpers.getSortNumber('stages', a.stage());
			b = helpers.getSortNumber('stages', b.stage());
			return a == b ? 0 : a < b ? -1 : 1
		});
	};
	self.removeLocation = (location)=>self.locations.remove(location);

	self.type   = ko.observable(data.type);
	self.race   = ko.observable(data.race);
	self.family = ko.observable(data.family);
	self.name   = ko.observable(data.name);

	function cleanupDrops() {
		self.drops([...new Set(self.drops())]);
		self.drops.sort();
	};
	function getRaceDrops() { return rootView.OPTIONS().monsterRaceDrops[self.race()]; }
	function getRaceDropPrefix() { return rootView.OPTIONS().monsterRaceDropPrefix[self.race()]; }
	function hasDrop(drop) { return self.drops().includes(drop) }

	self.drops          = ko.observableArray(data.drops);
	self.dropToAdd      = ko.observable(getRaceDropPrefix());
	self.hasMissingRaceDrop = ko.computed(()=>getRaceDrops().some((drop)=>!hasDrop(drop)));
	self.addRaceDrops   = ()=> {
		getRaceDrops().forEach((drop)=>!hasDrop(drop) && self.drops.push(drop));
		cleanupDrops();
	};
	self.addDrop        = ()=> {
		var drops     = self.drops,
		    dropToAdd = self.dropToAdd();
		(dropToAdd !== '' && !hasDrop(dropToAdd)) && drops.push(dropToAdd);
		cleanupDrops();
		self.dropToAdd(getRaceDropPrefix());
	};
	self.removeDrop     = (drop)=>self.drops.remove(drop);

	self.isNewMaterial  = ko.pureComputed(()=> {
		var curName   = self.dropToAdd();
		var isNewName = !rootView.OPTIONS().itemMaterial.includes(curName)
		return curName !== '' && isNewName;
	});
	self.addNewMaterial = function () {
		var OPTIONS = rootView.OPTIONS();
		OPTIONS.itemMaterial.push(self.dropToAdd());
		OPTIONS.itemMaterial = OPTIONS.itemMaterial.sort();
		rootView.OPTIONS(OPTIONS);
		rootView.saveData();
	};

	self.getDuplicateCheckData = ko.computed(()=>[
		self.name()
	].join('|'));
	self.isDuplicate           = ko.computed(()=>rootView.data.monster().some((m)=>
		self.id !== m.id &&
		self.getDuplicateCheckData() === m.getDuplicateCheckData()
	));

	self.mediaCss = ko.pureComputed(()=>`${self.isDuplicate() ? 'duplicate' : ''}`);

	self.export = ()=>({
		locations: self.locations().map((m)=>m.export()),
		type:      self.type(),
		race:      self.race(),
		family:    self.family(),
		name:      self.name(),
		drops:     self.drops()
	});
};