"use strict";

function FiltersModel(newData = {
	location:       {
		area:  '',
		stage: ''
	},
	gearType:       '',
	filtersActive:  false,
	locationActive: true,
	gearTypeActive: true,
	onlyTransformableGear: false,
}) {
	var self      = this;
	self.dataType = 'filter';
	self.location       = new LocationModel(newData.location);
	self.gearType       = ko.observable(newData.gearType || '');
	self.onlyTransformableGear = ko.observable(newData.onlyTransformableGear || false)

	self.filtersActive  = ko.observable(newData.filtersActive || false);
	self.locationActive = ko.observable(newData.locationActive || true);
	self.gearTypeActive = ko.observable(newData.gearTypeActive || true);

	self.getFilter = function () {
		var filter            = {};
		filter.filtersActive  = self.filtersActive();
		filter.locationActive = self.locationActive();
		filter.gearTypeActive = self.gearTypeActive();
		if (self.filtersActive()) {
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
		}
		return filter;
	}
	self.export    = ()=>({
		location:       {
			area:  self.location.area(),
			stage: self.location.stage()
		},
		gearType:       self.gearType(),
		filtersActive:  self.filtersActive(),
		locationActive: self.locationActive(),
		gearTypeActive: self.gearTypeActive(),
		onlyTransformableGear: self.onlyTransformableGear(),
	});
}