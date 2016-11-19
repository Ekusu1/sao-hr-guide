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
	lv:        {
		sp: {min: 0, max: 0},
		n:  {min: 0, max: 0},
		h:  {min: 0, max: 0},
		nm: {min: 0, max: 0},
	}
}) {
	var self             = this;
	self.dataType        = 'monster';
	self.tmpType         = 'item-monster';
	self.id              = helpers.newGuid();
	self.sortKey         = ko.pureComputed(()=>[
		helpers.getSortNumber('stages', self.locations()[0].stage()),
		helpers.getSortNumber('eventType', self.type()),
		helpers.padNumber(self.lv.sp.min()),
		helpers.padNumber(self.lv.sp.max()),
		self.name()
	].join('-'));
	self.locked          = ko.observable(false);
	self.switchLock      = ()=> self.locked(!self.locked());
	self.initContextmenu = ()=>$('#' + self.id).contextMenu({menuSelector: '#contextMenu-' + self.id});

	self.locations = ko.observableArray(data.locations.map((v)=>new LocationModel(v)));
	self.type      = ko.observable(data.type)
	self.name      = ko.observable(data.name);
	self.lv        = {
		sp: {},
		n: {},
		h: {},
		nm: {}
	};
	self.lv.sp.min = ko.observable(data.lv.sp.min);
	self.lv.sp.max = ko.observable(data.lv.sp.max);
	self.lv.n.min  = ko.observable(data.lv.n.min);
	self.lv.n.max  = ko.observable(data.lv.n.max);
	self.lv.h.min  = ko.observable(data.lv.h.min);
	self.lv.h.max  = ko.observable(data.lv.h.max);
	self.lv.nm.min = ko.observable(data.lv.nm.min);
	self.lv.nm.max = ko.observable(data.lv.nm.max);

	self.addLocation    = ()=>self.locations.push(new LocationModel());
	self.removeLocation = (location)=>self.locations.remove(location);

	self.export = ()=>({
		locations: self.locations().map((m)=>m.export()),
		type: self.type(),
		name: self.name(),
		lv:   {
			sp: {
				min: self.lv.sp.min,
				max: self.lv.sp.max
			},
			n:  {
				min: self.lv.n.min,
				max: self.lv.n.max
			},
			h:  {
				min: self.lv.h.min,
				max: self.lv.h.max
			},
			nm: {
				min: self.lv.nm.min,
				max: self.lv.nm.max
			},
		}
	});
};