"use strict";

function EventModel(newData = {
	location: {
		area:  '',
		stage: '',
	},
	type:     'M',
	name:     '',
	goals:    [],
	rewards:  []
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
		GH.getSortNumber('monsterType', self.type())
	].join('|'));

	self.location = new LocationModel(newData.location);
	self.type     = ko.observable(newData.type);
	self.name     = ko.observable(newData.name);

	self.goals = ko.observableArray(newData.goals.map((v)=>new GoalModel(v, self)));
	self.goals().length == 0 && self.goals.push(new GoalModel(undefined, self));
	self.addGoal    = ()=>self.goals.push(new GoalModel(undefined, self));
	self.removeGoal = (goal)=>self.goals.remove(goal);

	self.rewards = ko.observableArray(newData.rewards.map((v)=>new RewardModel(v, self)));
	self.rewards().length == 0 && self.rewards.push(new RewardModel(undefined, self));
	self.addReward    = ()=>self.rewards.push(new RewardModel(undefined, self));
	self.removeReward = (reward)=>self.rewards.remove(reward);

	self.getTmpPreset = ()=>({location: self.location.export()});

	self.getDuplicateCheckData = ko.computed(()=>[
		self.location.area(),
		self.location.stage(),
		self.name()
	].join('|'));
	self.isDuplicate = ko.computed(()=>GH.findDuplicates(self).length>0);

	self.hasMissingData = ko.pureComputed(()=>
		self.location.stage() == '' ||
		self.name() == ''
	);

	self.additionalCss = ko.observable('');
	self.mediaCss      = ko.pureComputed(()=>`${self.isDuplicate() ? 'duplicateModel' : ''} ${self.additionalCss()} ${self.hasMissingData() ? 'hasMissingData' : ''}`);

	self.export = ()=>({
		location: self.location.export(),
		type:     self.type(),
		name:     self.name(),
		goals:    self.goals().map((m)=>m.export()),
		rewards:  self.rewards().map((m)=>m.export()),
	});
}
