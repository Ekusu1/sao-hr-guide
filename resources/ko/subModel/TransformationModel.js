"use strict";

function TransformationModel(newData = {
	name:  '',
	requiredMaterials: [],
}, parent) {
	var self = this;

	self.name       = ko.observable(newData.name);
	function findGear (name) {
		var result = GH.findByKeyValue('gear', 'name', self.name());
		return result.length > 0 ? result[0].model : null;
	}
	self.isNewGear   = ko.pureComputed(()=> {
		var curName   = self.name();
		var isNew = !(GH.getData('gear')().some((m)=>m.name() === curName));
		return curName !== '' && isNew;
	});
	self.type = ko.pureComputed(()=>{
		var gear = findGear(self.name());
		return gear ? gear.type() : "";
	});
	self.rarity = ko.pureComputed(()=>{
		var gear = findGear(self.name());
		return gear ? gear.rarity : "";
	});

	self.requiredMaterials = ko.observableArray(newData.requiredMaterials.map((data)=>new CraftingMaterialModel(data)));
	self.addRequiredMaterial = ()=>{
		self.requiredMaterials.push(new CraftingMaterialModel())
		console.log(self.requiredMaterials());
	};
	self.removeRequiredMaterial = (requiredMaterial)=>self.requiredMaterials.remove(requiredMaterial);

	self.dataType = 'gear';
	self.getTmpPreset = ()=>({type: parent.type(), name: self.name(), transformedFrom: parent.name()});

	self.export = ()=>({
		name:  self.name(),
		requiredMaterials: self.requiredMaterials().map((m)=>m.export())
	});
}