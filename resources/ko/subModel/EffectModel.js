"use strict";

function EffectModel(data = {
	name:     '',
	value:    0,
	baseStat: false
}) {
	var self = this;

	self.name     = ko.observable(data.name);
	self.value    = ko.observable(data.value);
	self.baseStat = ko.observable(data.baseStat);

	self.checkIfNew = ko.pureComputed(()=> {
		var curName = self.name();
		var options = rootView.OPTIONS();
		options = options.gearEffect.concat(options.baseEffect);
		var newName = !options.includes(curName)
		return curName !== '' && newName;
	});

	self.addNew = function () {
		var OPTIONS = rootView.OPTIONS();
		OPTIONS.gearEffect.push(self.name());
		OPTIONS.gearEffect = OPTIONS.gearEffect.sort();
		rootView.OPTIONS(OPTIONS);
		rootView.saveData();
	};

	self.export = ()=>({
		name:     self.name(),
		value:    self.value(),
		baseStat: self.baseStat()
	});
};
