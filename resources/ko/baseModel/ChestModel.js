"use strict";

function ChestModel(data = {
	location:   {
		area:  '',
		stage: '',
	},
	rarity:     'Brown',
	where:      '',
	item:       ''
}) {
	var self             = this;
	self.id              = helpers.newGuid();
	self.dataType        = 'chests';
	self.tmpType         = 'item-chest';
	self.sortKey         = ko.pureComputed(()=>[
			helpers.getSortNumber('stages', self.location().stage()),
			helpers.getSortNumber('chestRarity', self.rarity())
		].join('-')
	);
	self.locked          = ko.observable(false);
	self.switchLock      = ()=>self.locked(!self.locked());
	self.initContextmenu = ()=>$('#' + self.id).contextMenu({menuSelector: '#contextMenu-' + self.id});

	self.location    = ko.observable(new LocationModel(data.location));
	self.rarity      = ko.observable(data.rarity);
	self.where       = ko.observable(data.where);
	self.itemInfo = ko.pureComputed(()=> {
		var info = {type: '&nbsp;', rarity: '&nbsp;'},
		    result = helpers.findByKeyValue('gear', 'name', self.item());
		if (result.length > 0) {
			var m = result[0].model;
			info.type = m.type();
			info.rarity = m.rarity();
		}
		return info;
	});

	self.item        = ko.observable(data.item);
	self.isNewItem   = ko.pureComputed(()=> {
		var curItem   = self.item();
		var isNewItem = !(rootView.data.gear().some((m)=>m.name() === curItem));
		return curItem !== '' && isNewItem;
	});

	self.getTmpPreset = ()=>{name: self.item()};

	self.export = ()=>({
		location:   self.location().export(),
		rarity:     self.rarity(),
		where:      self.where(),
		item:       self.item()
	});
};
