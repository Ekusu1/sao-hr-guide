"use strict";

function RewardModel(newData = {
	type:   'EXP',
	name:   'EXP',
	gear:   '',
	amount: 0
}, parent){
	var self      = this;
	self.dataType = undefined;
	var types     = {
		typeSwitch: {
			'EXP':     ()=>self.name('EXP').gear(''),
			'Col':     ()=>self.name('Col').gear(''),
			'Item':    ()=>self.name('').amount(1).gear(''),
			'Gear':    ()=>self.name('').amount(1),
			'LastHit': ()=>self.name('').amount(1),
			'Chest':   ()=>self.name('Silver').amount(1)
		},
		name:       {
			'EXP':     ()=>false,
			'Col':     ()=>false,
			'Item':    ()=>true,
			'Gear':    ()=>true,
			'LastHit': ()=>true,
			'Chest':   ()=>true
		},
		amount:     {
			'EXP':     ()=>true,
			'Col':     ()=>true,
			'Item':    ()=>true,
			'Gear':    ()=>false,
			'LastHit': ()=>false,
			'Chest':   ()=>false
		},
		preset:     {
			'Gear':    ()=>({name: self.name()}),
			'LastHit': ()=>({name: self.name()}),
			'Chest':   ()=>({location: parent.location.export(), rarity: self.name()})
		}
	};

	self.type       = ko.observable(newData.type);
	self.switchType = ()=>types.typeSwitch[self.getType()]();

	self.getType  = ()=>{
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
			case 'Chest':
				self.dataType = 'chests';
				return 'Chest';
			default:
				self.dataType = undefined;
				return self.type();
		}
	};

	self.name       = ko.observable(newData.name);
	self.nameShow   = ko.pureComputed(()=>types.name[self.getType()]());
	self.amount     = ko.observable(newData.amount);
	self.amountShow = ko.pureComputed(()=>types.amount[self.getType()]());

	self.hasGear    = ko.pureComputed(()=>['Chest', 'Gear', 'LastHit'].includes(self.getType()));
	self.gear       = ko.observable(newData.gear);
	self.itemIcon   = ko.pureComputed(()=>{
		var info   = {iconCss: '', stars: '&nbsp;'};
		if (self.hasGear()) {
			var result = GH.findByKeyValue('gear', 'name', self.gear());
			if (result.length > 0) {
				var m = result[0];
				info  = m.iconInfo();
			}
		}
		return info;
	});
	self.isNewGear = ko.pureComputed(()=>{
		if (self.hasGear()) {
			var curGear = self.gear();
			var isNew   = !(GH.getData('gear')().some(m=>m.name() === curGear));
			return curGear !== '' && isNew;
		}
		return false;
	});
	self.showGear = ()=>GH.findByName('gear', self.gear()).forEach(r=>GH.showModel(r))

	self.listRewardType = [
		'EXP', 'Col', 'Item', 'Chest', 'Gear', /* 'LastHit',*/ 'GearSP', 'LastHitSP', 'GearMP', 'LastHitMP'
	];

	self.isEXP     = ()=>['EXP'].includes(self.type());
	self.isCol     = ()=>['Col'].includes(self.type());
	self.isItem    = ()=>['Item'].includes(self.type());
	self.isGear    = ()=>['Gear', 'GearSP', 'GearMP'].includes(self.type());
	self.isLastHit = ()=>['LastHit', 'LastHitSP', 'LastHitMP'].includes(self.type());
	self.isChest   = ()=>['Chest'].includes(self.type());

	self.isNewOre = ko.pureComputed(()=>{
		var curName   = self.name();
		var isNewName = !GH.getOptions('itemOre').includes(curName);
		return curName !== '' && isNewName;
	});

	self.addNewOre = function (){
		var OPTIONS = GH.getOptions();
		OPTIONS.itemOre.push(self.name());
		OPTIONS.itemOre = OPTIONS.itemOre.sort();
		rootView.OPTIONS(OPTIONS);
	};

	self.getTmpPreset = ()=>types.preset[self.getType()]();

	self.hasMissingData = ko.pureComputed(()=>
		self.name() == '' &&
		(['Chest', 'Gear', 'LastHit'].includes(self.getType()) && self.gear() == '')
	);

	self.export = ()=>({
		type:   self.type(),
		name:   self.name(),
		gear:   self.gear(),
		amount: self.amount()
	});
}