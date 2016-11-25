"use strict";

function GearModel(data = {
	name:    '',
	type:    '',
	rarity:  'Purple',
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
	]
}) {
	var self             = this;
	self.dataType        = 'gear';
	self.tmpType         = 'item-gear';
	self.id              = helpers.newGuid();
	self.sortKey         = ko.pureComputed(()=>[
			helpers.getSortNumber('itemType', self.type()),
			helpers.getSortNumber('itemRarity', self.rarity()),
			helpers.padNumber(self.stars()),
			self.name(),
		].join('-')
	);
	self.isNew           = ko.observable(false);
	self.locked          = ko.observable(true);
	self.switchLock      = ()=> self.locked(!self.locked());
	self.initContextmenu = ()=> {
		$('#' + self.id).contextMenu({menuSelector: '#contextMenu-' + self.id, menuSelected: ()=> {}})
	};

	self.name    = ko.observable(data.name);
	self.type    = ko.observable(data.type);
	self.rarity  = ko.observable(data.rarity);
	self.stars   = ko.observable(data.stars);
	self.starsText = ko.computed(()=>{
		var text ='';
		for (var i = 0; i < self.stars(); i++) {
			text += '★';
		}
		return text.length > 0 ? text : '-';
	})
	self.effects = ko.observableArray(data.effects.map((data)=>new EffectModel(data)));
	self.groupedEffects = ko.pureComputed(()=> {
		var grouped = {
			base:       [],
			resistance: [],
			other:      []
		};
		self.effects().forEach((stat)=> {
			var baseStats       = ['ATK', 'DEF', 'HP', 'SP', 'STR', 'VIT', 'AGI', 'DEX'],
			    resistanceStats = ['Slashing', 'Thrusting', 'Crushing', 'Knockdown', 'Stun', 'Numb', 'Poison', 'Bleed', 'Physical', 'Soul', 'Debuff'];

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

	self.addEffect    = ()=>self.effects.push(new EffectModel());
	self.removeEffect = (effect)=>self.effects.remove(effect);


	self.getDuplicateCheckData = ko.computed(()=>[
		self.name()
	].join('|'));
	self.isDuplicate           = ko.computed(()=>rootView.data.chests().some((m)=>
		self.id !== m.id &&
		self.getDuplicateCheckData() === m.getDuplicateCheckData()
	));

	self.mediaCss = ko.pureComputed(()=>`bg-${self.rarity().toLowerCase()} ${self.isDuplicate() ? 'duplicate' : ''}`);

	self.export = ()=>({
		name:    self.name(),
		type:    self.type(),
		rarity:  self.rarity(),
		stars:   self.stars(),
		effects: self.effects().map((m)=>m.export())
	});
};
