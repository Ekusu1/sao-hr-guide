"use strict";

function EventModel(data = {
	location: {
		area:  '',
		stage: '',
	},
	type:     'M',
	name:     '',
	lv:       0,
	goals:    [],
	rewards:  []
}) {
	var self             = this;
	self.dataType        = 'events';
	self.tmpType         = 'item-event';
	self.id              = helpers.newGuid();
	self.sortKey         = ko.pureComputed(()=>[
		helpers.getSortNumber('stages', self.location.stage()),
		helpers.getSortNumber('monsterType', self.type()),
		helpers.padNumber(self.lv())
	].join('-'));
	self.locked          = ko.observable(false);
	self.switchLock      = ()=> self.locked(!self.locked());
	self.initContextmenu = ()=> $('#' + self.id).contextMenu({menuSelector: '#contextMenu-' + self.id});

	self.location = new LocationModel(data.location);
	self.type     = ko.observable(data.type)
	self.name     = ko.observable(data.name);
	self.lv       = ko.observable(data.lv);

	self.goals    = ko.observableArray(data.goals.map((v)=>new GoalModel(v, self)));
	self.goals().length == 0 && self.goals.push(new GoalModel(undefined, self));
	self.addGoal   = ()=>self.goals.push(new GoalModel(undefined, self));
	self.removeGoal   = (goal)=>self.goals.remove(goal);

	self.rewards  = ko.observableArray(data.rewards.map((v)=>new RewardModel(v, self)));
	self.rewards().length == 0 && self.rewards.push(new RewardModel(undefined, self));
	self.addReward = ()=>self.rewards.push(new RewardModel(undefined, self));
	self.removeReward = (reward)=>self.rewards.remove(reward);

	self.getTmpPreset = ()=>({location: self.location.export()});

	self.getDuplicateCheckData = ko.computed(()=>[
		self.location.area(),
		self.location.stage(),
		self.name(),
		helpers.padNumber(self.lv())
	].join('|'));
	self.isDuplicate           = ko.computed(()=>rootView.data.events().some((m)=>
		self.id !== m.id &&
		self.getDuplicateCheckData() === m.getDuplicateCheckData()
	));

	self.export = ()=>({
		location: self.location.export(),
		type:     self.type(),
		name:     self.name(),
		lv:       self.lv(),
		goals:    self.goals().map((m)=>m.export()),
		rewards:  self.rewards().map((m)=>m.export()),
	});
};
