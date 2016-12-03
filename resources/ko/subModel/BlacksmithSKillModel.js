"use strict";

function BlacksmithSKillModel(newData = {
	name:     ''
}) {
	var self = this;

	self.name     = ko.observable(newData.name);

	self.listBlacksmithSkills = [
		'',
		'Enhancement Apprentice',
		'Enhancement Journyman',
		'Enhancement Master',
		'Transformation Apprentice',
		'Transformation Journyman',
		'Transformation Master',
		'Intuition',
		'Weapon Smithing',
		'Armor Smithing',
		"Artisan's Pride",
		'Time Management',
		'Tenacity',
		'Innovativ',
		'Fumble',
		'Slump',
		'Revenge',
		'Epiphany',
		'Reliable',
		'Rush Job',
		'Detail Oriented',
		'Klutz',
		'Perseverance',
		'Discerning Eye',
		'Awakening',
		'Blessing',
		'Smithing Smarts',
		'Brawn',
		'Overworked',
		'Scrap Master',
		'Quick Study'
	];
	var skillInfo = {
		'': {type: 'bs-none', description: ""},
		'Enhancement Apprentice':    {css: 'bs-yellow', description: "Slightly increses enhancement success rate."},
		'Enhancement Journyman':     {css: 'bs-yellow', description: "Moderately increses enhancement success rate."},
		'Enhancement Master':        {css: 'bs-yellow', description: "Greatly increses enhancement success rate."},
		'Transformation Apprentice': {css: 'bs-yellow', description: "Slightly increses transform success rate."},
		'Transformation Journyman':  {css: 'bs-yellow', description: "Moderately increses transform success rate."},
		'Transformation Master':     {css: 'bs-yellow', description: "Greatly increses transform success rate."},
		'Intuition':                 {css: 'bs-yellow', description: "Increases the quality of transformation materials"},
		'Weapon Smithing':           {css: 'bs-yellow', description: "Increases weapon forging success rate."},
		'Armor Smithing':            {css: 'bs-yellow', description: "Increases armor forging success rate."},
		"Artisan's Pride":           {css: 'bs-yellow', description: "Increases high-level item forging success rate."},
		'Time Management':           {css: 'bs-yellow', description: "Increases low-level item forging success rate."},
		'Tenacity':                  {css: 'bs-yellow', description: "Bonus chance of success when forging high-level items."},
		'Innovativ':                 {css: 'bs-red', description: "Bonus chance of success when forging low-level items."},
		'Fumble':                    {css: 'bs-red', description: "Moderately decreases forging success rate."},
		'Slump':                     {css: 'bs-red', description: "Limits maximum forging success rate to 30%."},
		'Revenge':                   {css: 'bs-yellow', description: "Greatly increases forging success rate after failure."},
		'Epiphany':                  {css: 'bs-yellow', description: "Grants a 100% forging success rate."},
		'Reliable':                  {css: 'bs-yellow', description: "Increases all forging success rates by 10%."},
		'Rush Job':                  {css: 'bs-grey', description: "Success rate up. Ability Lv & add skill % down."},
		'Detail Oriented':           {css: 'bs-yellow', description: "Increases chance of additional skill attachment."},
		'Klutz':                     {css: 'bs-red', description: "Decreases chance of additional skill attachment."},
		'Perseverance':              {css: 'bs-red', description: "Increases chance of additional buff attachment."},
		'Discerning Eye':            {css: 'bs-yellow', description: "Increases chance of additional debuff attachment."},
		'Awakening':                 {css: 'bs-yellow', description: "100% skill attachment chance to high-level items, x1 slot."},
		'Blessing':                  {css: 'bs-yellow', description: "100% skill attachment chance x3 slot."},
		'Smithing Smarts':           {css: 'bs-yellow', description: "Increases additional abilities to Lv MAX"},
		'Brawn':                     {css: 'bs-yellow', description: "Levels up additional abilities."},
		'Overworked':                {css: 'bs-red', description: "Levels down additional abilities."},
		'Scrap Master':              {css: 'bs-yellow', description: "Increases number of materials recovered when forging fails."},
		'Quick Study':               {css: 'bs-yellow', description: "Increases EXP earned uppon successful forge."},
	};
	self.skillClass = ko.pureComputed(()=>skillInfo[self.name()].css);
	self.description = ko.pureComputed(()=>skillInfo[self.name()].description);

	self.getSkillInfo = skill=>skillInfo[skill];

	self.export = ()=>self.name();
}
