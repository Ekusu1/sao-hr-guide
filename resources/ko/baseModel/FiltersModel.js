"use strict";

function FiltersModel() {
	var self      = this;
	self.dataType = 'filter';

	self.location = new LocationModel();
	self.gearType = ko.observable();

	self.filtersActive  = ko.observable(false);
	self.locationActive = ko.observable(true);
	self.gearTypeActive = ko.observable(true);


}
