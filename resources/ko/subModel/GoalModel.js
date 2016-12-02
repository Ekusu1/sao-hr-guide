"use strict";

function GoalModel(newData = {
	type:   'Kill',
	name:   '',
	amount: 1
}, parent) {
	var self      = this;
	self.dataType = 'monster';
	self.template = 'item-monster';
	self.type     = ko.observable(newData.type);

	self.monsterType = ko.pureComputed(()=> {
		var result = GH.findByKeyValue('monster', 'name', self.name());
		return result.length > 0 ? result[0].model.type() : 'M';
	});
	self.name        = ko.observable(newData.name);
	self.amount      = ko.observable(newData.amount);
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

	self.showMonster = ()=>GH.findByName('monster', self.name()).forEach(r=>rootView.showModel(r.model));

	self.listGoalType = ["Kill", "Protect", "Stealth"];

	self.isNew = ko.computed(()=> {
		var curMonster   = self.name();
		var isNewMonster = !GH.getData('monster')().some(m=>m.name() === curMonster);
		return curMonster !== '' && isNewMonster;
	});

	self.getTmpPreset = ()=>({locations: [new LocationModel(parent.location.export())], name: self.name()});

	self.export = ()=>({
		type:   self.type(),
		name:   self.name(),
		amount: self.amount()
	});
}