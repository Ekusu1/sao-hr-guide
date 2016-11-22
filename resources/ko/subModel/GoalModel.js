"use strict";

function GoalModel(data = {
	type:   'Kill',
	name:   '',
	amount: 1
}, parent) {
	var self = this;
	self.tmpType     = 'item-monster';
	self.type        = ko.observable(data.type);
	self.monsterType = ko.pureComputed(()=> {
		var result = helpers.findByKeyValue('monster', 'name', self.name());
		return result.length > 0 ? result[0].model.type() : 'M';
	});
	self.name        = ko.observable(data.name);
	self.amount      = ko.observable(data.amount);
	self.amountShow  = ko.pureComputed(()=> {
		var types = {
			Kill:    ()=> {return true;},
			Protect: ()=> {
				self.amount(0);
				return false;
			},
			Stealth: ()=> {
				self.amount(0);
				return false;
			}
		};
		return types[self.type()]();
	});

	self.listGoalType = ["Kill", "Protect", "Stealth"];

	self.checkIfNew = ko.computed(()=> {
		var curMonster   = self.name();
		var isNewMonster = !rootView.data.monster().some((m)=>m.name() === curMonster);
		return curMonster !== '' && isNewMonster;
	});

	self.getTmpPreset = ()=>({locations: [new LocationModel(parent.location().export())], name: self.name()});

	self.export = ()=>({
		type:   self.type(),
		name:   self.name(),
		amount: self.amount()
	});
};