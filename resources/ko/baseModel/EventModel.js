"use strict";

function EventModel(newData = {
	location:    {
		area:  '',
		stage: '',
	},
	name:        '',
	goals:       [
		{type: 'Kill', name: '', amount: 1}
	],
	rewards:     [
		{type: 'EXP', name: 'EXP', amount: 0},
		{type: 'Item', name: '', amount: 1},
	],
	chainEvents: []
}){
	GH.pauseFilter('events');
	//region base
	GH.modelBaseGenerator(this);
	var self           = this;
	//endregion
	//region require (probably has to be edited!)
	self.dataType = 'events';
	self.template = 'item-event';
	self.sortKey  = ko.pureComputed(()=>[
		GH.getSortNumber('stages', self.location.stage()),
		getEventTypeSortIndex()
	].join('|'));

	self.mediaCss = ko.pureComputed(()=>GH.mediaCssGenerator(self, [
		`bg-event-${self.eventType()}`
	]));

	self.hasMissingData        = ko.pureComputed(()=>
		self.location.stage() == '' ||
		self.name() == '' ||
		self.goals().some(m=>m.hasMissingData()) ||
		self.rewards().some(m=>m.hasMissingData())
	);
	self.getDuplicateCheckData = ko.pureComputed(()=>[
		self.location.area(),
		self.location.stage(),
		self.name()
	].join('|'));

	self.getTmpPreset = ()=>({location: self.location.export()});
	self.filter       = filter=>{
		var results = [];

		var showTypes = [];
		filter.eventTypeNormal && showTypes.push('normal');
		filter.eventTypeSilver && showTypes.push('silver');
		filter.eventTypeGold && showTypes.push('gold');
		filter.eventTypeBoss && showTypes.push('boss');
		results.push(showTypes.includes(self.eventType()));

		if (filter.location.stage != '') {
			results.push(self.location.stage() == filter.location.stage);
		} else if (filter.location.area != '') {
			results.push(self.location.area() == filter.location.area);
		} else if (filter.location.area == '') {
			results.push(true);
		} else {
			results.push(false);
		}

		return results.every(r=>r === true);
	};
	self.export       = ()=>({
		location:    self.location.export(),
		name:        self.name(),
		goals:       self.goals().map(m=>m.export()),
		rewards:     self.rewards().map(m=>m.export()),
		chainEvents: self.chainEvents()
	});
	//endregion
	//region model
	self.eventType = ko.pureComputed(()=>{
		var result = 'normal';

		self.rewards().some(m=>{
			if (m.type() == 'Chest') {
				if (m.name() == 'Silver') {
					result = 'silver';
					return true;
				}
				if (m.name() == 'Gold') {
					result = 'gold';
					return true;
				}
			}
			if (['GearSP', 'LastHitSP', 'GearMP', 'LastHitMP',].includes(m.type())) {
				result = 'boss';
				return true;
			}
			return false;
		});
		return result;
	});
	function getEventTypeSortIndex(){
		var sortIndex = {
			normal: 0,
			silver: 1,
			gold: 2,
			boss: 3
		};
		return sortIndex[[self.eventType()]];
	}

	self.location = new LocationModel(newData.location);
	self.name     = ko.observable(newData.name);

	self.goals      = ko.observableArray(newData.goals.map(data=>new GoalModel(data, self)));
	self.addGoal    = ()=>self.goals.push(new GoalModel(undefined, self));
	self.removeGoal = goal=>self.goals.remove(goal);

	self.rewards      = ko.observableArray(newData.rewards.map(data=>new RewardModel(data, self)));
	self.addReward    = ()=>self.rewards.push(new RewardModel({type: 'Item', name: '', amount: 1}, self));
	self.removeReward = reward=>self.rewards.remove(reward);

	self.hasChainEvents   = ko.pureComputed(()=>self.rewards().some(m=>m.getType() == 'Chest' && m.name() == 'Silver'))
	self.chainEvents      = ko.observableArray(newData.chainEvents || []);
	self.chainEventToAdd  = ko.observable('');
	self.addChainEvent    = ()=>{
		if (self.chainEventToAdd() != '') {
			var toAdd = self.chainEventToAdd().split(' | ');
			self.chainEvents.push({stage: toAdd[0], name: toAdd[1]});
		}
		self.chainEventToAdd('');
	};
	self.showChainEvent   = (chainEvent)=>{
		var events = GH.getData('events')()
			.filter(m=>chainEvent.stage == m.location.stage() && chainEvent.name == m.name());
		events.forEach(m=>GH.showModel(m));
	};
	self.removeChainEvent = (chainEvent)=>self.chainEvents.remove(chainEvent);
	self.listAreaEvents   = ko.pureComputed(()=>
		GH.getData('events')()
			.filter(m=>self.location.area() == m.location.area())
	);
	//endregion
	GH.resumeFilter('events');
}
