"use strict";

function BlacksmithModel(newData = {
	location: {
		area:  '',
		stage: ''
	},
	name:     '',
	skills:   [],
	stats:    {
		precision:       0,
		technique:       0,
		growthPotential: 0,
		knowledge:       0,
		recycling:       0,
	}
}) {
	var self        = this;
	self.dataType   = 'blacksmiths';
	self.template   = 'item-blacksmith';
	self.id         = ko.observable(GH.newGuid());
	self.isTmp      = ko.observable(false);
	self.isNew      = ko.observable(false);
	self.locked     = ko.observable(DEFAULT_LOCK_STATUS);
	self.switchLock = ()=> self.locked(!self.locked());
	self.sortKey    = ko.pureComputed(()=>[
		GH.getSortNumber('stages', self.location.stage()),
		self.name()
	].join('|'));

	self.location = new LocationModel(newData.location);
	self.name     = ko.observable(newData.name);

	self.skills      = ko.observableArray(newData.skills.map(data=>new BlacksmithSKillModel({name: data})));
	self.addSkill    = ()=>self.skills().length < 6 && self.skills.push(new BlacksmithSKillModel());
	self.removeSkill = skill=>self.skills.remove(skill);

	self.stats = {
		precision:       ko.observable(newData.stats.precision),
		technique:       ko.observable(newData.stats.technique),
		growthPotential: ko.observable(newData.stats.growthPotential),
		knowledge:       ko.observable(newData.stats.knowledge),
		recycling:       ko.observable(newData.stats.recycling),
	};

	self.chartData = ko.pureComputed(()=> {
		return {
			// labels:   ["Precision", "Technique", "Growth Potential", "Knowledge", "Recycling"],
			labels:   ["", "", "", "", ""],
			datasets: [
				{
					backgroundColor: "rgba(96, 191, 191, 0.5)",
					borderColor:     "rgba(32, 128, 128, 1)",
					borderWidth:     2,
					pointRadius:     0,
					data:            [
						self.stats.precision(), self.stats.technique(), self.stats.growthPotential(),
						self.stats.knowledge(), self.stats.recycling()
					]
				}
			]
		};
	});

	self.chartOptions = {
		// observeChanges: true,
		// throttle: 100,
		scale:  {
			// lineArc: true,
			gridLines:  {
				color:         "rgba(255,255,255,.1)",
				zeroLineColor: "rgba(255,255,255,.25)"
			},
			angleLines: {
				color: "rgba(255,255,255,.1)",
			},
			ticks:      {
				display:     false,
				beginAtZero: true,
				min:         0,
				max:         5,
				stepSize:    1
			}
		},
		legend: {display: false},
		title:  {display: false},
	};

	self.getDuplicateCheckData = ko.computed(()=>[
		self.location.stage(),
		self.name()
	].join('|'));
	self.isDuplicate           = ko.computed(()=>GH.findDuplicates(self).length > 0);

	self.hasMissingData = ko.pureComputed(()=>
		self.location.stage() == '' ||
		self.name() == '' ||
		self.stats.precision() == 0 ||
		self.stats.technique() == 0 ||
		self.stats.growthPotential() == 0 ||
		self.stats.knowledge() == 0 ||
		self.stats.recycling() == 0 ||
		self.skills().length == 0
	);

	self.additionalCss = ko.observable('');
	self.mediaCss      = ko.pureComputed(()=>`${self.isDuplicate() ? 'duplicateModel' : ''} ${self.additionalCss()} ${self.hasMissingData() ? 'hasMissingData' : ''}`);

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

	self.export = ()=>({
		location: self.location.export(),
		name:     self.name(),
		stats:    {
			precision:       self.stats.precision(),
			technique:       self.stats.technique(),
			growthPotential: self.stats.growthPotential(),
			knowledge:       self.stats.knowledge(),
			recycling:       self.stats.recycling(),
		},
		skills:   self.skills().map(m=>m.export()),
	});
}
