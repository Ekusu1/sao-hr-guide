"use strict";

function LocationModel(newData = {
	area:  '',
	stage: '',
}) {
	var self = this;

	self.area       = ko.observable(newData.area || GH.getLast('area') || '');
	self.stage      = ko.observable(newData.stage || GH.getLast('stage') || '');
	self.listAreas = rootView.OPTIONS().areas;
	self.listStages = ko.pureComputed(()=>{
		var stages = GH.getOptions('stages'),
		    currentStage = self.stage(),
		    allStages = [];
		$.each(stages, (k,area)=>area.forEach((v)=>allStages.push(v)));
		var selectable = self.area() !== '' ? stages[self.area()] : allStages;
		selectable.includes(currentStage) || selectable.push(currentStage);
		return selectable;
	});

	self.setLast = ()=> {
		GH.setLast('area', self.area());
		GH.setLast('stage', self.stage());
	};

	self.export = ()=>({
		area:  self.area(),
		stage: self.stage(),
	});
}