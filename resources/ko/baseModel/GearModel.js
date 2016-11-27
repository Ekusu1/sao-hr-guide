"use strict";

function GearModel(newData = {
	name:    '',
	type:    '',
	rarity:  'Uncommon',
	stars:   0,
	effects: [
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
}) {
	//region require
	var self           = this;
	self.id            = ko.observable(GH.newGuid());
	self.isTmp         = ko.observable(false);
	self.isNew         = ko.observable(false);
	self.locked        = ko.observable(DEFAULT_LOCK_STATUS);
	self.switchLock    = ()=> self.locked(!self.locked());
	self.sortKey       = ko.pureComputed(()=>[
		GH.getSortNumber('itemType', self.type()),
		GH.getSortNumber('itemRarity', self.rarity()),
		GH.padNumber(self.stars()),
		self.name(),
	].join('-'));
	self.additionalCss = ko.observable('');
	//endregion
	//region require (probably has to be edited!)
	self.dataType = 'gear';
	self.template = 'item-gear';
	//endregion

	self.name   = ko.observable(newData.name);
	self.type   = ko.observable(newData.type);
	self.rarity = ko.observable(newData.rarity);

	self.stars     = ko.observable(newData.stars);
	self.starsText = ko.computed(()=> {
		var text = '';
		for (var i = 0; i < self.stars(); i++) {
			text += '★';
		}
		return text.length > 0 ? text : '-';
	});

	self.effects        = ko.observableArray(newData.effects.map((data)=>new EffectModel(data)));
	self.groupedEffects = ko.pureComputed(()=> {
		var grouped = {
			base:       [],
			resistance: [],
			other:      []
		};
		self.effects().forEach((stat)=> {
			var baseStats       = ['ATK', 'DEF', 'HP', 'SP', 'STR', 'VIT', 'AGI', 'DEX'],
			    resistanceStats = [
				    'Slashing', 'Thrusting', 'Crushing', 'Knockdown', 'Stun', 'Numb', 'Poison', 'Bleed', 'Physical',
				    'Soul', 'Debuff'
			    ];

			if (baseStats.includes(stat.name())) {
				grouped.base.push(stat);
			} else if (resistanceStats.includes(stat.name())) {
				grouped.resistance.push(stat);
			} else {
				grouped.other.push(stat);
			}
		});
		return grouped;
	});
	self.addEffect      = ()=>self.effects.push(new EffectModel());
	self.removeEffect   = (effect)=>self.effects.remove(effect);

	self.transformedFrom      = ko.observable(newData.transformedFrom);
	self.transformations      = ko.observableArray(newData.transformations.map((data)=>new TransformationModel(data, self)));
	self.addTransformation    = ()=>self.transformations.push(new TransformationModel(undefined, self));
	self.removeTransformation = (transformation)=>self.transformations.remove(transformation);

	//region require
	self.getDuplicateCheckData = ko.computed(()=>[
		self.name()
	].join('|'));

	self.hasMissingData = ko.pureComputed(()=>
		self.type() == '' ||
		self.rarity() == '' ||
		self.name() == ''
	);

	self.mediaCss = ko.pureComputed(()=>`bg-${self.rarity().toLowerCase()} ${self.isDuplicate() ? 'duplicateModel' : ''} ${self.additionalCss()} ${self.hasMissingData() ? 'hasMissingData' : ''}`);

	self.export = ()=>({
		name:            self.name(),
		type:            self.type(),
		rarity:          self.rarity(),
		stars:           self.stars(),
		transformedFrom: self.transformedFrom(),
		transformations: self.transformations().map((m)=>m.export()),
		effects:         self.effects().map((m)=>m.export())
	});
	//endregion
	//region required bottom
	self.isDuplicate = ko.computed(()=>GH.findDuplicates(self).length > 0);
	//endregion
}
