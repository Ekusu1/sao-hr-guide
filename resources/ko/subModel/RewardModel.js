"use strict";

function RewardModel(data = {
	type:   'EXP',
	name:   'EXP',
	amount: 0
}, parent) {
	var self = this;
	var types = {
		name: {
			'EXP':     ()=>{self.name('EXP'); return false; },
			'Col':     ()=>{self.name('Col'); return false;},
			'Item':    ()=>{return true;},
			'Gear':    ()=>{return true;},
			'LastHit': ()=>{return true;},
			'Chest':   ()=>{return true;}
		},
		amount: {
			'EXP':     ()=>{return true;},
			'Col':     ()=>{return true;},
			'Item':    ()=>{return true;},
			'Gear':    ()=>{self.amount(1); return false;},
			'LastHit': ()=>{self.amount(1); return false;},
			'Chest':   ()=>{self.amount(1); return false;}
		},
		preset: {
			'Gear':    ()=>({name: self.name()}),
			'LastHit': ()=>({name: self.name()}),
			'Chest':   ()=>({location: parent.location().export(), rarity: self.name()})
		}
	}

	self.type       = ko.observable(data.type);
	self.gearType = ko.pureComputed(()=>{
		if (!(self.isGear() || self.isLastHit())) { return "&nbsp;"; }
		var result = helpers.findByKeyValue('gear', 'name', self.name());
		return result.length > 0 ? result[0].model.type() : "&nbsp;";
	})
	self.name       = ko.observable(data.name);
	self.nameShow   = ko.pureComputed(()=>types.name[self.type()]());
	self.amount     = ko.observable(data.amount);
	self.amountShow = ko.pureComputed(()=>types.amount[self.type()]());

	self.isEXP     = ()=>self.type() === 'EXP';
	self.isCol     = ()=>self.type() === 'Col';
	self.isItem    = ()=>self.type() === 'Item';
	self.isGear    = ()=>self.type() === 'Gear';
	self.isLastHit = ()=>self.type() === 'LastHit';
	self.isChest   = ()=>self.type() === 'Chest';

	self.getTmpPreset = ()=>types.preset[self.type()]();

	self.export = ()=>({
		type:   self.type(),
		name:   self.name(),
		amount: self.amount()
	});
};