"use strict";

function ChestModel(newData = {
	location: {
		area:  '',
		stage: '',
	},
	rarity:   'Brown',
	where:    '',
	item:     ''
}) {
	var self        = this;
	self.id         = ko.observable(GH.newGuid());
	self.dataType   = 'chests';
	self.template   = 'item-chest';
	self.isTmp      = ko.observable(false);
	self.isNew      = ko.observable(false);
	self.locked     = ko.observable(DEFAULT_LOCK_STATUS);
	self.switchLock = ()=>self.locked(!self.locked());
	self.sortKey    = ko.pureComputed(()=>[
		GH.getSortNumber('stages', self.location.stage()),
		GH.getSortNumber('chestRarity', self.rarity())
	].join('|'));

	self.location     = new LocationModel(newData.location);
	self.rarity       = ko.observable(newData.rarity);
	self.changeRarity = function () {
		var options = {
			"":       "",
			"Brown":  "",
			"Blue":   "",
			"Red":    "Stage Boss",
			"Silver": "Event Chain",
			"Gold":   "Area Boss",
		}
		self.where(options[self.rarity()]);
	};
	self.listWhere    = ko.pureComputed(()=> {
		var options = {
			"":       ["", "Top", "Right", "Bottom", "Left", "Stage Boss", "Area Boss", "Events", "Event Chain"],
			"Brown":  ["", "Top", "Right", "Bottom", "Left"],
			"Blue":   ["", "Top", "Right", "Bottom", "Left"],
			"Red":    ["", "Stage Boss", "Events"],
			"Silver": ["Event Chain"],
			"Gold":   ["Area Boss"],
		}
		return options[self.rarity()];
	});
	self.where        = ko.observable(newData.where);
	self.name         = ko.computed(()=>`${self.location.stage()}<hr>${self.rarity()}-${self.where()}`);

	self.itemInfo  = ko.pureComputed(()=> {
		var info   = {type: '&nbsp;', rarity: '&nbsp;'},
		    result = GH.findByKeyValue('gear', 'name', self.item());
		if (result.length > 0) {
			var m       = result[0].model;
			info.type   = m.type();
			info.rarity = m.rarity();
		}
		return info;
	});
	self.item      = ko.observable(newData.item);
	self.isNewGear = ko.pureComputed(()=> {
		return GH.isNewData(self, 'item', 'gear', 'name');
		// var curItem = self.item();
		// var isNew   = !(GH.getData('gear')().some(m=>m.name() === curItem));
		// return curItem !== '' && isNew;
	});

	self.showGear = ()=>GH.findByName('gear', self.item()).forEach(r=>rootView.showModel(r.model));


	self.getDuplicateCheckData = ko.computed(()=>[
		self.location.stage(),
		self.rarity(),
		self.where(),
		self.item()
	].join('|'));
	self.isDuplicate           = ko.computed(()=>GH.findDuplicates(self).length > 0);

	self.hasMissingData = ko.pureComputed(()=>
		self.location.stage() == '' ||
		self.rarity() == '' ||
		self.where() == '' ||
		self.item() == ''
	);

	self.additionalCss = ko.observable('');
	self.mediaCss      = ko.pureComputed(()=>`bg-${self.rarity().toLowerCase()} ${self.isDuplicate() ? 'duplicateModel' : ''} ${self.additionalCss()} ${self.hasMissingData() ? 'hasMissingData' : ''}`);

	self.getTmpPreset = ()=>({altDataType: 'gear', name: self.item()});

	self.filter = function (filter) {
		var results = []
		if (filter.location !== undefined) {
			filter.location.area != undefined && results.push(self.location.area() == filter.location.area);
			filter.location.stage != undefined && results.push(self.location.stage() == filter.location.stage);
		} else {
			return true;
		}
		return results.every(r=>r === true);
	};

	self.export = ()=>({
		location: self.location.export(),
		rarity:   self.rarity(),
		where:    self.where(),
		item:     self.item()
	});
}
