"use strict";

function RewardModel(data = {
	type:   'EXP',
	name:   'EXP',
	amount: 0
}, parent) {
	var self  = this;
	var types = {
		name:   {
			'EXP':     ()=> {
				self.name('EXP');
				return false;
			},
			'Col':     ()=> {
				self.name('Col');
				return false;
			},
			'Item':    ()=> {return true;},
			'Gear':    ()=> {return true;},
			'LastHit': ()=> {return true;},
			'Chest':   ()=> {return true;}
		},
		amount: {
			'EXP':     ()=> {return true;},
			'Col':     ()=> {return true;},
			'Item':    ()=> {return true;},
			'Gear':    ()=> {
				self.amount(1);
				return false;
			},
			'LastHit': ()=> {
				self.amount(1);
				return false;
			},
			'Chest':   ()=> {
				self.amount(1);
				return false;
			}
		},
		preset: {
			'Gear':    ()=>({name: self.name()}),
			'LastHit': ()=>({name: self.name()}),
			'Chest':   ()=>({location: parent.location().export(), rarity: self.name()})
		}
	}

	self.type       = ko.observable(data.type);
	self.getType = ()=>{
		switch (self.type()) {
			case 'Gear':
			case 'GearSP':
			case 'GearMP':
				return 'Gear';
			case 'LastHit':
			case 'LastHitSP':
			case 'LastHitMP':
				return 'LastHit';
			default:
				return self.type();
		}
	}
	self.gearType   = ko.pureComputed(()=> {
		if (!(self.isGear() || self.isLastHit())) { return "&nbsp;"; }
		var result = helpers.findByKeyValue('gear', 'name', self.name());
		return result.length > 0 ? result[0].model.type() : "&nbsp;";
	})
	self.name       = ko.observable(data.name);
	self.nameShow   = ko.pureComputed(()=>types.name[self.getType()]());
	self.amount     = ko.observable(data.amount);
	self.amountShow = ko.pureComputed(()=>types.amount[self.getType()]());

	self.isNewItem

	self.listRewardType  = [
		'EXP', 'Col', 'Item', 'Chest', 'Gear', 'LastHit', 'GearSP', 'LastHitSP', 'GearMP', 'LastHitMP'
	];
	self.listItemOther   = rootView.OPTIONS().itemOther;
	self.listChestRarity = rootView.OPTIONS().chestRarity;

	self.isEXP     = ()=>['EXP'].includes(self.type());
	self.isCol     = ()=>['Col'].includes(self.type());
	self.isItem    = ()=>['Item'].includes(self.type());
	self.isGear    = ()=>['Gear', 'GearSP', 'GearMP'].includes(self.type());
	self.isLastHit = ()=>['LastHit', 'LastHitSP', 'LastHitMP'].includes(self.type());
	self.isChest   = ()=>['Chest'].includes(self.type());

	self.getTmpPreset = ()=>types.preset[self.getType()]();

	self.export = ()=>({
		type:   self.type(),
		name:   self.name(),
		amount: self.amount()
	});
};