"use strict";

function CraftingMaterialModel(newData = {
	material:     '',
	amount:    1,
}) {
	var self = this;

	self.material     = ko.observable(newData.material);
	self.amount    = ko.observable(newData.amount);

	self.export = ()=>({
		material:     self.material(),
		amount:    self.amount()
	});
}
