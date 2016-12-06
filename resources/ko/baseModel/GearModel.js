"use strict";

function GearModel(newData = {
	name:            '',
	type:            '',
	rarity:          'Uncommon',
	stars:           1,
	effects:         [
		{name: 'ATK', value: 0, baseStat: true},
		{name: 'DEF', value: 0, baseStat: true},
		{name: 'HP', value: 0, baseStat: true},
		{name: 'SP', value: 0, baseStat: true},
		{name: 'STR', value: 0, baseStat: true},
		{name: 'VIT', value: 0, baseStat: true},
		{name: 'DEX', value: 0, baseStat: true},
		{name: 'AGI', value: 0, baseStat: true},
		{name: 'Slashing', value: 0, baseStat: false},
		{name: 'Thrusting', value: 0, baseStat: false},
		{name: 'Crushing', value: 0, baseStat: false},
		{name: 'Knockdown', value: 0, baseStat: false},
		{name: 'Stun', value: 0, baseStat: false},
		{name: 'Numb', value: 0, baseStat: false},
		{name: 'Poison', value: 0, baseStat: false},
		{name: 'Bleed', value: 0, baseStat: false},
		{name: 'Physical', value: 0, baseStat: false},
		{name: 'Soul', value: 0, baseStat: false},
		{name: 'Debuff', value: 0, baseStat: false}
	],
	transformedFrom: '',
	transformations: []
}){
	//region base
	GH.modelBaseGenerator(this);
	var self           = this;
	//endregion

	//region require (probably has to be edited!)
	self.dataType = 'gear';
	self.template = 'item-gear';
	self.sortKey  = ko.pureComputed(()=>[
		GH.getSortNumber('itemType', self.type()),
		GH.getSortNumber('itemRarity', self.rarity()),
		GH.padNumber(self.stars()),
		self.name(),
	].join('-'));

	self.iconCss  = ko.pureComputed(()=>GH.iconCssGenerator([
		'gear', self.type(), self.rarity()
	]));
	self.mediaCss = ko.pureComputed(()=>GH.mediaCssGenerator(self, [
		`bg-${self.rarity().toLowerCase()}`
	]));

	self.hasMissingData        = ko.pureComputed(()=>
		self.type() == '' ||
		self.rarity() == '' ||
		self.name() == ''
	);
	self.getDuplicateCheckData = ko.pureComputed(()=>[
		self.name()
	].join('|'));

	self.filter = filter=>{
		var results = [];
		filter.gearType !== undefined && results.push(self.type() == filter.gearType);
		filter.gearType == '' && results.push(true);
		filter.onlyTransformableGear !== undefined && results.push(self.transformable() == filter.onlyTransformableGear);
		return results.every(r=>r === true);
	};
	self.export = ()=>({
		name:            self.name(),
		type:            self.type(),
		rarity:          self.rarity(),
		stars:           self.stars(),
		transformedFrom: self.transformedFrom(),
		transformations: self.transformations().map(m=>m.export()),
		effects:         self.effects().map(m=>m.export())
	});
	//endregion

	self.name   = ko.observable(newData.name);
	self.type   = ko.observable(newData.type);
	self.rarity = ko.observable(newData.rarity);

	self.stars     = ko.observable(newData.stars);
	self.starsText = ko.pureComputed(()=>{
		var text = '';
		self.stars() < 0 && self.stars(0);
		self.stars() > 5 && self.stars(5);
		for (var i = 0; i < self.stars(); i++) { text += '★'; }
		return text.length > 0 ? text : '&nbsp;';
	});

	self.effects        = ko.observableArray(newData.effects.map(data=>new EffectModel(data)));
	self.groupedEffects = ko.pureComputed(()=>{
		var grouped = {
			base:       [],
			resistance: [],
			other:      []
		};
		self.effects().forEach(effect=>{
			var baseStats       = ['ATK', 'DEF', 'HP', 'SP', 'STR', 'VIT', 'AGI', 'DEX'],
			    resistanceStats = [
				    'Slashing', 'Thrusting', 'Crushing', 'Knockdown', 'Stun', 'Numb', 'Poison', 'Bleed', 'Physical',
				    'Soul', 'Debuff'
			    ];

			if (baseStats.includes(effect.name())) {
				grouped.base.push(effect);
			} else if (resistanceStats.includes(effect.name())) {
				grouped.resistance.push(effect);
			} else {
				grouped.other.push(effect);
			}
		});
		return grouped;
	});
	self.addEffect      = ()=>self.effects.push(new EffectModel());
	self.removeEffect   = effect=>self.effects.remove(effect);


	self.transformedFrom      = ko.observable(newData.transformedFrom || '');
	self.transformations      = ko.observableArray(newData.transformations.map(data=>new TransformationModel(data, self)));
	self.transformable        = ko.pureComputed(()=>self.transformedFrom() !== '' || self.transformations().length > 0);
	self.addTransformation    = ()=>self.transformations.push(new TransformationModel(undefined, self));
	self.removeTransformation = transformation=>self.transformations.remove(transformation);

	self.showTransformedFrom = ()=>{
		var gear = GH.findByName('gear', self.transformedFrom());
		gear.push(self);
		gear.forEach(r=>GH.showModel(r));
	};
}
