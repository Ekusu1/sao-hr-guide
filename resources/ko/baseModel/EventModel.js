"use strict";

function EventModel(newData = {
	location:    {
		area:  '',
		stage: '',
	},
	name:        '',
	goals:       [
		{type:   'Kill', name:   '', amount: 1}
	],
	rewards:     [
		{type: 'EXP', name: 'EXP', amount: 0},
		{type: 'Item', name: '', amount: 1},
	],
	chainEvents: []
}) {
	var self        = this;
	self.dataType   = 'events';
	self.template   = 'item-event';
	self.id         = ko.observable(GH.newGuid());
	self.isTmp      = ko.observable(false);
	self.isNew      = ko.observable(false);
	self.locked     = ko.observable(DEFAULT_LOCK_STATUS);
	self.switchLock = ()=> self.locked(!self.locked());
	self.sortKey    = ko.pureComputed(()=>[
		GH.getSortNumber('stages', self.location.stage()),
		getEventTypeSortIndex()
	].join('|'));

	self.location = new LocationModel(newData.location);
	self.name     = ko.observable(newData.name);

	self.goals = ko.observableArray(newData.goals.map(data=>new GoalModel(data, self)));
	self.addGoal    = ()=>self.goals.push(new GoalModel(undefined, self));
	self.removeGoal = goal=>self.goals.remove(goal);

	self.rewards = ko.observableArray(newData.rewards.map(data=>new RewardModel(data, self)));
	self.addReward    = ()=>self.rewards.push(new RewardModel({type: 'Item', name: '', amount: 1}, self));
	self.removeReward = reward=>self.rewards.remove(reward);

	self.getTmpPreset = ()=>({location: self.location.export()});

	self.getDuplicateCheckData = ko.computed(()=>[
		self.location.area(),
		self.location.stage(),
		self.name()
	].join('|'));
	self.isDuplicate           = ko.computed(()=>GH.findDuplicates(self).length > 0);

	self.hasMissingData = ko.pureComputed(()=>
		self.location.stage() == '' ||
		self.name() == ''
	);

	self.eventType = ko.pureComputed(()=> {
		var result = 'bg-event-normal';

		self.rewards().some(m=> {
			if (m.type() == 'Chest') {
				if (m.name() == 'Silver') {
					result = 'bg-event-silver';
					return true;
				}
				if (m.name() == 'Gold') {
					result = 'bg-event-gold';
					return true;
				}
			}
			if (['Gear', 'LastHit', 'GearSP', 'LastHitSP', 'GearMP', 'LastHitMP',].includes(m.type())) {
				result = 'bg-event-boss';
				return true;
			}
			return false;
		});
		return result;
	});
	function getEventTypeSortIndex() {
		switch (self.eventType()) {
			case 'bg-event-normal':
				return 0;
			case 'bg-event-silver':
				return 1;
			case 'bg-event-gold':
				return 2;
			case 'bg-event-boss':
				return 3;
		}
	}

	self.additionalCss = ko.observable('');
	self.mediaCss      = ko.pureComputed(()=>`${self.eventType()} ${self.isDuplicate() ? 'duplicateModel' : ''} ${self.additionalCss()} ${self.hasMissingData() ? 'hasMissingData' : ''}`);

	self.filter = function (filter) {
		var results = []
		if (filter.location !== undefined) {
			filter.location.area != undefined && results.push(self.location.area() == filter.location.area);
			filter.location.stage != undefined && results.push(self.location.stage() == filter.location.stage);
		} else {
			return true;
		}
		return results.every(r=>r === true);
	};

	self.chainEvents      = ko.observableArray(newData.chainEvents || []);
	self.chainEventToAdd  = ko.observable('');
	self.addChainEvent    = ()=> {
		if (self.chainEventToAdd() != '') {
			var toAdd = self.chainEventToAdd().split(' | ');
			self.chainEvents.push({stage: toAdd[0], name: toAdd[1]});
		}
		;
		self.chainEventToAdd('');
	}
	self.showChainEvent   = (chainEvent)=> {
		var events = GH.getData('events')()
			.filter(m=>chainEvent.stage == m.location.stage() && chainEvent.name == m.name());
		events.forEach(m=>GH.showModel(m));
	}
	self.removeChainEvent = (chainEvent)=>self.chainEvents.remove(chainEvent);
	self.listAreaEvents   = ko.computed(()=>
		GH.getData('events')()
			.filter(m=>self.location.area() == m.location.area())
	);

	self.export = ()=>({
		location:    self.location.export(),
		name:        self.name(),
		goals:       self.goals().map(m=>m.export()),
		rewards:     self.rewards().map(m=>m.export()),
		chainEvents: self.chainEvents()
	});
}
