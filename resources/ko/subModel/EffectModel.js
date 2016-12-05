"use strict";

function EffectModel(newData = {
	name:     '',
	value:    0,
	baseStat: false
}) {
	var self = this;

	self.name     = ko.observable(newData.name);
	self.value    = ko.observable(newData.value);
	self.baseStat = ko.observable(newData.baseStat);

	self.isNewEffect = ko.pureComputed(()=> {
		var curName = self.name();
		var newName = !GH.getOptions('gearEffect').concat(GH.getOptions('baseEffect')).includes(curName);
		return curName !== '' && newName;
	});

	self.addNewEffect = function () {
		var OPTIONS = GH.getOptions();
		OPTIONS.gearEffect.push(self.name());
		OPTIONS.gearEffect = OPTIONS.gearEffect.sort();
		rootView.OPTIONS(OPTIONS);
	};

	self.export = ()=>({
		name:     self.name(),
		value:    self.value(),
		baseStat: self.baseStat()
	});
}
