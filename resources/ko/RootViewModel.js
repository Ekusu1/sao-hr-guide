function RootViewModel() {
	var self     = this;
	self.saveData = function () {
		self.sortData();
		var options = self.OPTIONS()
		var main_data = {}
		$.each(self.data, (key, data)=>main_data[key] = data().map((m)=>m.export()))
		helpers.setLocalStorage('OPTIONS', options);
		helpers.setLocalStorage('MAIN_DATA', main_data);
	}
	self.exportData = function () {
		self.saveData();
		var regex1 = /"([A-Za-z0-9_]*)":/gm;
		var regex2 = /\{:/gm;
		var exportData =
			    `var OPTIONS = ${localStorage.getItem('OPTIONS').replace(regex1, "$1:").replace(regex2, '{"":')};\n`+
			    `var MAIN_DATA = ${localStorage.getItem('MAIN_DATA').replace(regex1, "$1:")};`;
		helpers.export.createFile('MAIN_DATA.txt', exportData)
	}
	self.loadData = function () {
		var options = helpers.getLocalStorage('OPTIONS');
		var main_data = helpers.getLocalStorage('MAIN_DATA');
		!$.isEmptyObject(options) && (OPTIONS = options);
		!$.isEmptyObject(main_data) && (MAIN_DATA = main_data);
	}

	self.OPTIONS = ko.observable();
	self.data    = {
		gear:    ko.observableArray(),
		chests:  ko.observableArray(),
		events:  ko.observableArray(),
		monster: ko.observableArray()
	};
	self.last = {
		area: '',
		stage: '',
	}

	self.sortData = ()=>{
		$.each(self.data, (key,data)=>{
			var sortedData = data().sort((a,b)=>a.sortKey() == b.sortKey() ? 0 : a.sortKey() <  b.sortKey() ? -1 : 1);
			self.data[key](sortedData);
		})
	};

	self.tmpModelType        = ko.observable('gear');
	self.tmpModel            = ko.observableArray();
	var addNewDialogInstance = null;

	function confirmRemoveDialog(model, callback) {
		var dialog = BootstrapDialog.confirm({
			title:    false,
			size:     BootstrapDialog.SIZE_SMALL,
			message:  '<div class="text-center"><h5>Are you sure you want to remove: </h5><h2>' + model.name() + '</h2></div>',
			closable: true,
			type:     BootstrapDialog.TYPE_WARNING,
			callback: callback
		});
		dialog.getModalHeader().hide();
	};
	function addNewDialog(type, presetData) {
		var types = {
			gear:    ()=>new GearModel(),
			chest:   ()=>new ChestModel(),
			event:   ()=>new EventModel(),
			monster: ()=>new MonsterModel()
		};
		self.tmpModelType(type);
		var newModel = types[type]();
		$.each(presetData, (k, v)=>{
			switch (k) {
				case 'location':
					newModel[k].area(v.area);
					newModel[k].stage(v.stage);
					break;
				default: newModel[k](v); break;
			}
		});
		self.tmpModel.push(newModel);
		addNewDialogInstance.open();
	}

	self.removeGear    = (m)=>confirmRemoveDialog(m, (r)=>(r && self.data.gear.remove(m)));
	self.removeChest   = (m)=>confirmRemoveDialog(m, (r)=>(r && self.data.chests.remove(m)));
	self.removeEvent   = (m)=>confirmRemoveDialog(m, (r)=>(r && self.data.events.remove(m)));
	self.removeMonster = (m)=>confirmRemoveDialog(m, (r)=>(r && self.data.monster.remove(m)));

	self.addNewGear    = (m)=>addNewDialog('gear', m.getTmpPreset());
	self.addNewChest   = (m)=>addNewDialog('chest', m.getTmpPreset());
	self.addNewEvent   = (m)=>addNewDialog('event', m.getTmpPreset());
	self.addNewMonster = (m)=>addNewDialog('monster', m.getTmpPreset());

	self.addGear    = ()=>{addNewDialog('gear', {});};
	self.addChest   = ()=>{addNewDialog('chest', {});};
	self.addEvent   = ()=>{addNewDialog('event', {});};
	self.addMonster = ()=>{addNewDialog('monster', {});};

	self.init = function () {
		self.loadData();
		self.OPTIONS(OPTIONS);
		self.data.gear(MAIN_DATA.gear.map((data)=>new GearModel(data)));
		self.data.chests(MAIN_DATA.chests.map((data)=>new ChestModel(data)));
		self.data.events(MAIN_DATA.events.map((data)=>new EventModel(data)));
		self.data.monster(MAIN_DATA.monster.map((data)=>new MonsterModel(data)));
		self.saveData();

		addNewDialogInstance = new BootstrapDialog({
			size:        'size-extra-wide',
			autodestroy: false,
			onshown:     ()=>self.tmpModel.valueHasMutated(),
			onhidden:    ()=>self.tmpModelType('item-gear').tmpModel([]),
			message:     `<div class="media-list" data-bind="foreach: $root.tmpModel"><div data-bind="template: tmpType"></div></div>`,
			buttons:     [{
				label:  'Cancel',
				cssClass: 'btn-sm btn-default col-xs-4 pull-left',
				action: (dialogRef)=>dialogRef.close()
			},{
				label:    'Create',
				cssClass: 'btn-sm btn-primary col-xs-7 pull-right',
				action:   function (dialogRef) {
					self.tmpModel().forEach((m)=>self.data[m.dataType].push(m));
					self.saveData();
					dialogRef.close();
				}
			}]
		});
		addNewDialogInstance.open();
		addNewDialogInstance.getModalHeader().hide();
		addNewDialogInstance.close();
	};
}