"use strict";

function MonsterModel(data = {
	locations: [
		{
			area:  '',
			stage: ''
		}
	],
	type:      'M',
	name:      '',
	drops: []
}) {
	var self             = this;
	self.dataType        = 'monster';
	self.tmpType         = 'item-monster';
	self.id              = helpers.newGuid();
	self.sortKey         = ko.pureComputed(()=>[
		helpers.getSortNumber('stages', self.locations()[0].stage()),
		helpers.getSortNumber('monsterType', self.type()),
		helpers.padNumber(self.locations()[0].lvMin()),
		helpers.padNumber(self.locations()[0].lvMax()),
		self.name()
	].join('-'));
	self.locked          = ko.observable(false);
	self.switchLock      = ()=> self.locked(!self.locked());
	self.initContextmenu = ()=>$('#' + self.id).contextMenu({menuSelector: '#contextMenu-' + self.id});

	self.locations = ko.observableArray(data.locations.map((v)=>new LocationModel(v)));
	self.addLocation    = ()=>self.locations.push(new LocationModel());
	self.removeLocation = (location)=>self.locations.remove(location);

	self.type      = ko.observable(data.type)
	self.name      = ko.observable(data.name);

	self.drops = ko.observableArray(data.drops);
	self.dropToAdd = ko.observable('');
	self.addDrop    = ()=>{
		var drops = self.drops;
		var dropToAdd = self.dropToAdd();
		if (dropToAdd !== '' && !drops().includes(dropToAdd)) {
			drops.push(dropToAdd);
		}
		self.drops.sort();
		self.dropToAdd('');
	};
	self.removeDrop = (drop)=>{
		console.log(drop);
		self.drops.remove(drop)
	};
	self.isNewMaterial = ko.pureComputed(()=> {
		var curName = self.dropToAdd();
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

	self.export = ()=>({
		locations: self.locations().map((m)=>m.export()),
		type: self.type(),
		name: self.name(),
		drops: self.drops()
	});
};