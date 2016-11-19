"use strict";

function LocationModel(data = {
	area:  '',
	stage: ''
}) {
	var self = this;

	self.id         = helpers.newGuid();
	self.area       = ko.observable(data.area || helpers.getLast("area"));
	self.stage      = ko.observable(data.stage || helpers.getLast("stage"));
	self.listStages = ko.pureComputed(()=>rootView.OPTIONS().stages[self.area()] || []);

	self.setLast = ()=> {
		helpers.setLast('area', self.area());
		helpers.setLast('stage', self.stage());
	};
	self.setLast();

	self.export = ()=>({
		area:  self.area(),
		stage: self.stage(),
	});
};