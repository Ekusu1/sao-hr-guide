"use strict";

function FiltersModel() {
	var self      = this;
	self.dataType = 'filter';

	self.filterActive = ko.observable(false);
	self.areas       = ko.observableArray();
	self.stages      = ko.observableArray();
	self.gearTypes = ko.observableArray();

	self.areasList = ko.pureComputed(()=> {
		var areas = GH.getOptions('areas').slice(0);
		areas.shift();
		areas.shift();
		areas.unshift('all');
		return areas;
	});

	self.stagesList = ko.pureComputed(()=> {
		var selectedAreas = self.areas();
		var allStages     = $.extend(true, {}, GH.getOptions('stages'));
		delete allStages['Town of Beginnings'];
		var filteredStages = {};
		$.each(allStages, (area, stages)=> {
			stages.shift();
			stages.unshift('all');
			allStages[area] = stages;
		});
		if (!selectedAreas.includes('all')) {
			$.each(allStages, (area, stages)=> {
				selectedAreas.includes(area) && (filteredStages[area] = stages);
			})
		} else {
			filteredStages = allStages;
		}
		return filteredStages;
	});

	self.gearTypesList = ko.pureComputed(()=> {
		var gearTypes = GH.getOptions('itemTypeGear').slice(0);
		gearTypes.shift();
		gearTypes.unshift('all');
		return gearTypes;
	});
}
