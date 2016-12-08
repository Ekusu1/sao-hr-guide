"use strict";

function FiltersModel(newData = {
	location:              {
		area:  '',
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

	self.gearType              = ko.observable(newData.gearType);
	self.onlyTransformableGear = ko.observable(newData.onlyTransformableGear);

	self.chestTypeBrown  = ko.observable(newData.chestTypeBrown);
	self.chestTypeBlue   = ko.observable(newData.chestTypeBlue);
	self.chestTypeRed    = ko.observable(newData.chestTypeRed);
	self.chestTypeSilver = ko.observable(newData.chestTypeSilver);
	self.chestTypeGold   = ko.observable(newData.chestTypeGold);

	self.eventTypeNormal = ko.observable(newData.eventTypeNormal);
	self.eventTypeSilver = ko.observable(newData.eventTypeSilver);
	self.eventTypeGold   = ko.observable(newData.eventTypeGold);
	self.eventTypeBoss   = ko.observable(newData.eventTypeGold);

	self.getFilter = function () {
		var filter            = {};
		filter.location = {};
		filter.location.area = self.location.area();
		filter.location.stage = self.location.stage();

		filter.gearType = self.gearType();
		filter.onlyTransformableGear = self.onlyTransformableGear();

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