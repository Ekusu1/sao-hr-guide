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
			helpers.getSortNumber('stages', self.location.stage()),
			helpers.getSortNumber('chestRarity', self.rarity())
		].join('|')
	);
	self.isNew           = ko.observable(false);
	self.locked          = ko.observable(true);
	self.switchLock      = ()=>self.locked(!self.locked());
	self.initContextmenu = ()=>$('#' + self.id).contextMenu({menuSelector: '#contextMenu-' + self.id});

	self.location    = new LocationModel(data.location);
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
	self.isNewGear   = ko.pureComputed(()=> {
		var curItem   = self.item();
		var isNew = !(rootView.data.gear().some((m)=>m.name() === curItem));
		return curItem !== '' && isNew;
	});

	self.getDuplicateCheckData = ko.computed(()=>[
		self.location.stage(),
		self.rarity(),
		self.where()
	].join('|'));
	self.isDuplicate           = ko.computed(()=>rootView.data.chests().some((m)=>
		self.id !== m.id &&
		self.getDuplicateCheckData() === m.getDuplicateCheckData()
	));

	self.mediaCss = ko.pureComputed(()=>`bg-${self.rarity().toLowerCase()} ${self.isDuplicate() ? 'duplicate' : ''}`);

	self.getTmpPreset = ()=>({name: self.item()});

	self.export = ()=>({
		location:   self.location.export(),
		rarity:     self.rarity(),
		where:      self.where(),
		item:       self.item()
	});
};
