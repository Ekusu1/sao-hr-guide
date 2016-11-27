"use strict";

function CraftingMaterialModel(newData = {
	material:     '',
	amount:    0,
}) {
	var self = this;

	self.material     = ko.observable(newData.name);
	self.amount    = ko.observable(newData.value);

	self.export = ()=>({
		material:     self.material(),
		amount:    self.amount()
	});
}
