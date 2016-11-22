"use strict";

function LocationModel(data = {
	area:  '',
	stage: '',
	lvMin: 0,
	lvMax: 0,
}) {
	var self = this;

	self.id         = helpers.newGuid();
	self.area       = ko.observable(data.area || rootView.last.area);
	self.stage      = ko.observable(data.stage || rootView.last.stage);
	self.listAreas = rootView.OPTIONS().areas;
	self.listStages = ko.pureComputed(()=>{
		var stages = rootView.OPTIONS().stages,
		    currentStage = self.stage(),
		    allStages = [],
		    selectable = [];
		$.each(stages, (k,area)=>area.forEach((v)=>allStages.push(v)));
		selectable = self.area() !== '' ? stages[self.area()] : allStages;
		selectable.includes(currentStage) || selectable.push(currentStage);
		return selectable;
	});
	self.lvMin = ko.observable(typeof data.lvMin !== 'undefined' ? data.lvMin : 0);
	self.lvMax = ko.observable(typeof data.lvMax !== 'undefined' ? data.lvMax : 0);

	self.setLast = ()=> {
		rootView.last.area = self.area();
		rootView.last.stage = self.stage();
	};

	self.export = ()=>({
		area:  self.area(),
		stage: self.stage(),
		lvMin: self.lvMin(),
		lvMax: self.lvMax()
	});
};