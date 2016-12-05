"use strict";

function FiltersModel(newData = {
	location:              {
		area:  'Great Plains of Rustoria',
		stage: ''
	},
	gearType:              '1H Sword',
	locationActive:        true,
	gearTypeActive:        true,
	onlyTransformableGear: false,
	chestTypeBrown:        true,
	chestTypeBlue:         true,
	chestTypeRed:          true,
	chestTypeSilver:       true,
	chestTypeGold:         true,
	eventTypeNormal:       true,
	eventTypeSilver:       true,
	eventTypeGold:         true,
	eventTypeBoss:         true,
}) {
	var self      = this;
	self.dataType = 'filter';
	self.location = new LocationModel(newData.location);

	self.gearType              = ko.observable(newData.gearType || '');
	self.onlyTransformableGear = ko.observable(newData.onlyTransformableGear || false)

	self.chestTypeBrown  = ko.observable(newData.chestTypeBrown || true);
	self.chestTypeBlue   = ko.observable(newData.chestTypeBlue || true);
	self.chestTypeRed    = ko.observable(newData.chestTypeRed || true);
	self.chestTypeSilver = ko.observable(newData.chestTypeSilver || true);
	self.chestTypeGold   = ko.observable(newData.chestTypeGold || true);

	self.eventTypeNormal = ko.observable(newData.eventTypeNormal || true);
	self.eventTypeSilver = ko.observable(newData.eventTypeSilver || true);
	self.eventTypeGold   = ko.observable(newData.eventTypeGold || true);
	self.eventTypeBoss   = ko.observable(newData.eventTypeGold || true);

	self.locationActive = ko.observable(newData.locationActive || true);
	self.gearTypeActive = ko.observable(newData.gearTypeActive || true);

	self.getFilter = function () {
		var filter            = {};
		filter.locationActive = self.locationActive();
		filter.gearTypeActive = self.gearTypeActive();
		if (self.locationActive()) {
			if (self.location.area() != '' || self.location.stage() != '') {
				filter.location = {};
				self.location.area() != '' && (filter.location.area = self.location.area());
				self.location.stage() != '' && (filter.location.stage = self.location.stage());
			}
		}
		if (self.gearTypeActive()) {
			self.gearType() != '' && (filter.gearType = self.gearType());
			self.onlyTransformableGear() && (filter.onlyTransformableGear = self.onlyTransformableGear())
		}

		filter.chestTypeBrown  = self.chestTypeBrown();
		filter.chestTypeBlue   = self.chestTypeBlue();
		filter.chestTypeRed    = self.chestTypeRed();
		filter.chestTypeSilver = self.chestTypeSilver();
		filter.chestTypeGold   = self.chestTypeGold();

		filter.eventTypeNormal = self.eventTypeNormal();
		filter.eventTypeSilver = self.eventTypeSilver();
		filter.eventTypeGold   = self.eventTypeGold();
		filter.eventTypeBoss   = self.eventTypeBoss();

		return filter;
	}
	self.export    = ()=>({
		location:              {
			area:  self.location.area(),
			stage: self.location.stage()
		},
		gearType:              self.gearType(),
		locationActive:        self.locationActive(),
		gearTypeActive:        self.gearTypeActive(),
		onlyTransformableGear: self.onlyTransformableGear(),
		chestTypeBrown:        self.chestTypeBrown(),
		chestTypeBlue:         self.chestTypeBlue(),
		chestTypeRed:          self.chestTypeRed(),
		chestTypeSilver:       self.chestTypeSilver(),
		chestTypeGold:         self.chestTypeGold(),
		eventTypeNormal:       self.eventTypeNormal(),
		eventTypeSilver:       self.eventTypeSilver(),
		eventTypeGold:         self.eventTypeGold(),
		eventTypeBoss:         self.eventTypeBoss(),
	});
}