"use strict";

function ChestModel(newData = {
	location: {
		area:  '',
		stage: '',
	},
	rarity:   'Brown',
	where:    '',
	item:     ''
}){
	GH.pauseFilter('chests');
	//region base
	GH.modelBaseGenerator(this);
	var self           = this;
	//endregion
	//region require (probably has to be edited!)
	self.dataType     = 'chests';
	self.template     = 'item-chest';
	self.sortKey      = ko.pureComputed(()=>[
		GH.getSortNumber('stages', self.location.stage()),
		GH.getSortNumber('chestRarity', self.rarity())
	].join('|'));
	self.getTmpPreset = ()=>({altDataType: 'gear', name: self.item()});

	self.iconCss  = ko.pureComputed(()=>GH.iconCssGenerator([
		'chest', self.rarity()
	]));
	self.mediaCss = ko.pureComputed(()=>GH.mediaCssGenerator(self, [
		`bg-${self.rarity().toLowerCase()}`
	]));

	self.hasMissingData        = ko.pureComputed(()=>
		self.location.stage() == '' ||
		self.rarity() == '' ||
		self.where() == '' ||
		self.item() == ''
	);
	self.getDuplicateCheckData = ko.pureComputed(()=>[
		self.location.stage(),
		self.rarity(),
		self.where()
	].join('|'));

	self.filter = filter=>{
		var results   = [];
		var showTypes = [];
		filter.chestTypeBrown && showTypes.push('Brown');
		filter.chestTypeBlue && showTypes.push('Blue');
		filter.chestTypeRed && showTypes.push('Red');
		filter.chestTypeSilver && showTypes.push('Silver');
		filter.chestTypeGold && showTypes.push('Gold');
		results.push(showTypes.includes(self.rarity()));

		if (filter.location.stage != '') {
			results.push(self.location.stage() == filter.location.stage);
		} else if (filter.location.area != '') {
			results.push(self.location.area() == filter.location.area);
		} else if (filter.location.area == '') {
			results.push(true);
		}

		return results.every(r=>r === true);
	};
	self.export = ()=>({
		location: self.location.export(),
		rarity:   self.rarity(),
		where:    self.where(),
		item:     self.item()
	});
	//endregion
	//region model
	self.location     = new LocationModel(newData.location);
	self.rarity       = ko.observable(newData.rarity);
	self.changeRarity = ()=>{
		var options = {
			"":       "",
			"Brown":  "",
			"Blue":   "",
			"Red":    "Stage Boss",
			"Silver": "Event Chain",
			"Gold":   "Area Boss",
		};
		self.where(options[self.rarity()]);
	};
	self.listWhere    = ko.pureComputed(()=>{
		var options = {
			"":       ["", "Top", "Right", "Bottom", "Left", "Stage Boss", "Area Boss", "Events", "Event Chain"],
			"Brown":  ["", "Top", "Right", "Bottom", "Left"],
			"Blue":   ["", "Top", "Right", "Bottom", "Left"],
			"Red":    ["", "Stage Boss", "Events"],
			"Silver": ["Event Chain"],
			"Gold":   ["Area Boss"],
		};
		return options[self.rarity()];
	});
	self.where        = ko.observable(newData.where);
	self.name         = ko.pureComputed(()=>`${self.location.stage()}<hr>${self.rarity()}-${self.where()}`);

	self.itemIcon  = ko.pureComputed(()=>{
		var info   = {iconCss: '', stars: '&nbsp;'},
		    result = GH.findByKeyValue('gear', 'name', self.item());
		if (result.length > 0) {
			var m       = result[0];
			info = m.iconInfo();
		}
		return info;
	});
	self.item      = ko.observable(newData.item);
	self.isNewGear = ko.pureComputed(()=>GH.isNewData(self, 'item', 'gear', 'name'));

	self.showGear = ()=>GH.findByName('gear', self.item()).forEach(r=>GH.showModel(r));
	//endregion
	GH.resumeFilter('chests');
}