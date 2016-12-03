"use strict";

function LocationModel(newData = {
	area:  '',
	stage: ''
}) {
	var self = this;

	self.area       = ko.observable(newData.area || GH.getLast('area') || '');
	self.stage      = ko.observable(newData.stage || GH.getLast('stage') || '');
	self.listAreas = rootView.OPTIONS().areas;
	self.listStages = ko.pureComputed(()=>{
		if(self.area() == '') { return ['']; }
		var stages = GH.getOptions('stages'),
		    allStages = [];
		$.each(stages, (k,area)=>area.forEach((v)=>allStages.push(v)));
		var selectable = self.area() !== '' ? stages[self.area()] : allStages;
		return selectable;
	});

	self.changeArea = function () {
		self.stage('');
		self.setLast();
	}
	self.setLast = ()=> {
		GH.setLast('area', self.area());
		GH.setLast('stage', self.stage());
	};

	self.export = ()=>({
		area:  self.area(),
		stage: self.stage(),
	});
}