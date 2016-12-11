"use strict";

function LocationModel(newData = {
	area:  '',
	stage: ''
}){
	var self = this;

	var setArea  = newData.area != '' ? newData.area : GH.getLast('area') || '';
	var setStage = newData.stage != '' ? newData.stage : GH.getLast('stage') || '';

	self.area  = ko.observable(setArea);
	self.stage = ko.observable(setStage);

	self.listAreas  = GH.getOptions('areas');
	self.listStages = ko.pureComputed(()=>{
		if (self.area() == '') { return ['']; }
		var stages    = GH.getOptions('stages'),
		    allStages = [];
		$.each(stages, (k, area)=>area.forEach((v)=>allStages.push(v)));
		return self.area() !== '' ? stages[self.area()] : allStages;
	});

	self.changeArea = function (){
		self.stage('');
		self.setLast();
	};
	self.setLast    = ()=>{
		GH.setLast('area', self.area());
		GH.setLast('stage', self.stage());
	};

	self.export = ()=>({
		area:  self.area(),
		stage: self.stage(),
	});
}