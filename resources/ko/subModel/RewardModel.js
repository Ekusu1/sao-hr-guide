"use strict";

function RewardModel(newData = {
	type:   'EXP',
	name:   'EXP',
	amount: 0
}, parent) {
	var self  = this;
	self.dataType = undefined;
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
			'Item':    ()=> {self.name(''); return true;},
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
			'Chest':   ()=>({location: parent.location.export(), rarity: self.name()})
		}
	};

	self.type       = ko.observable(newData.type);
	self.getType = ()=>{
		switch (self.type()) {
			case 'Gear':
			case 'GearSP':
			case 'GearMP':
				self.dataType = 'gear';
				return 'Gear';
			case 'LastHit':
			case 'LastHitSP':
			case 'LastHitMP':
				self.dataType = 'gear';
				return 'LastHit';
			default:
				self.dataType = undefined;
				return self.type();
		}
	};
	self.gearType   = ko.pureComputed(()=> {
		if (!(self.isGear() || self.isLastHit())) { return "&nbsp;"; }
		var result = GH.findByKeyValue('gear', 'name', self.name());
		return result.length > 0 ? result[0].model.type() : "&nbsp;";
	});
	self.name       = ko.observable(newData.name);
	self.nameShow   = ko.pureComputed(()=>types.name[self.getType()]());
	self.amount     = ko.observable(newData.amount);
	self.amountShow = ko.pureComputed(()=>types.amount[self.getType()]());

	self.listRewardType  = [
		'EXP', 'Col', 'Item', 'Chest', 'Gear', 'LastHit', 'GearSP', 'LastHitSP', 'GearMP', 'LastHitMP'
	];

	self.isEXP     = ()=>['EXP'].includes(self.type());
	self.isCol     = ()=>['Col'].includes(self.type());
	self.isItem    = ()=>['Item'].includes(self.type());
	self.isGear    = ()=>['Gear', 'GearSP', 'GearMP'].includes(self.type());
	self.isLastHit = ()=>['LastHit', 'LastHitSP', 'LastHitMP'].includes(self.type());
	self.isChest   = ()=>['Chest'].includes(self.type());

	self.isNewGear   = ko.pureComputed(()=> {
		var curName   = self.name();
		var isNew = !(GH.getData('gear')().some((m)=>m.name() === curName));
		return curName !== '' && isNew;
	});

	self.isNewOre = ko.pureComputed(()=> {
		var curName = self.name();
		var isNewName = !rootView.OPTIONS().itemOre.includes(curName);
		return curName !== '' && isNewName;
	});

	self.addNewOre = function () {
		var OPTIONS = rootView.OPTIONS();
		OPTIONS.itemOre.push(self.name());
		OPTIONS.itemOre = OPTIONS.itemOre.sort();
		rootView.OPTIONS(OPTIONS);
		rootView.saveData();
	};

	self.getTmpPreset = ()=>types.preset[self.getType()]();

	self.export = ()=>({
		type:   self.type(),
		name:   self.name(),
		amount: self.amount()
	});
}