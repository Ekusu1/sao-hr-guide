function RootViewModel() {
	var self = this;

	self.OPTIONS  = ko.observable();
	var dataTypes = {
		gear:    GearModel,
		chests:  ChestModel,
		events:  EventModel,
		monster: MonsterModel
	};
	self.DATA     = {
		gear:    ko.observableArray(),
		chests:  ko.observableArray(),
		events:  ko.observableArray(),
		monster: ko.observableArray()
	};
	self.FILTERS  = null;
	self.LAST     = {
		area:  '',
		stage: '',
	};

	self.sortData = ()=> {
		$.each(self.DATA, (key, data)=> {
			var sortedData = data().sort((a, b)=>a.sortKey() == b.sortKey() ? 0 : a.sortKey() < b.sortKey() ? -1 : 1);
			self.DATA[key](sortedData);
		})
	};

	self.tmpModels           = ko.observableArray();
	var addNewDialogInstance = null;

	function confirmRemoveDialog(model, callback) {
		console.log(model);
		var dialog = BootstrapDialog.confirm({
			title:    false,
			size:     BootstrapDialog.SIZE_SMALL,
			message:  `<div class="text-center"><h5>Are you sure you want to remove: </h5><h3>${model.name()}</h3></div>`,
			closable: true,
			type:     BootstrapDialog.TYPE_WARNING,
			callback: callback
		});
		dialog.getModalHeader().hide();
	}
	function resetModel() {
		self.tmpModels().forEach((m)=>m.additionalCss('').isTmp(false));
	}
	function addNewDialog(dataType, presetData, modelType = 'new', showModel = null) {
		var model = null;
		if (typeof presetData.altDataType !== "undefined") {
			dataType = presetData.altDataType;
			delete presetData.altDataType;
		}
		switch (modelType) {
			case 'new':
				model = new dataTypes[dataType]();
				$.each(presetData, (k, v)=> {
					switch (k) {
						case 'location':
							model[k].area(v.area);
							model[k].stage(v.stage);
							break;
						default:
							model[k](v);
							break;
					}
				});
				model.isNew(true);
				model.additionalCss('newModel');
				break;
			case 'clone':
				model = new dataTypes[dataType](presetData);
				model.isNew(true);
				model.additionalCss('cloneModel');
				break;
			case 'show':
				model = showModel;
				model.isNew(false);
				model.additionalCss('showModel');
				break;
			case 'duplicate':
				model = showModel;
				model.isNew(false);
				break;
		}
		model.locked(false).isTmp(true);
		self.tmpModels.push(model);
		addNewDialogInstance.open();
	}

	self.createGear          = ()=>addNewDialog('gear', {});
	self.createChest         = ()=>addNewDialog('chests', {});
	self.createEvent         = ()=>addNewDialog('events', {});
	self.createMonster       = ()=>addNewDialog('monster', {});
	self.createPresetModel   = (m)=>addNewDialog(m.dataType, m.getTmpPreset(), 'new');
	self.cloneModel          = (m)=>addNewDialog(m.dataType, m.export(), 'clone');
	self.showModel           = (m)=>addNewDialog(m.dataType, {}, 'show');
	self.showDuplicateModels = (m1)=> {
		var duplicates = GH.findDuplicates(m1);
		if (duplicates) {
			duplicates.forEach((m2)=>m2.additionalCss('duplicateFoundModel'));
			m1.additionalCss('duplicateModel');
			duplicates.unshift(m1);
			duplicates.forEach((m)=>!self.tmpModels().includes(m) && addNewDialog(m.dataType, {}, 'duplicate', m));
		}
	};
	self.removeMainModel     = (m)=>confirmRemoveDialog(m, (r)=>(r && self.DATA[m.dataType].remove(m)));
	self.removeTmpModel      = (m)=>confirmRemoveDialog(m, (r)=>(r && self.tmpModels.remove(m)));
	self.removeTmpMainModel  = (m)=>confirmRemoveDialog(m, (r)=>r && self.tmpModels.remove(m), self.DATA[m.dataType].remove(m));

	self.saveData   = function () {
		self.sortData();
		var data = {};
		$.each(self.DATA, (dataType)=>data[dataType] = GH.getData(dataType)().map((m)=>m.export()));
		GH.setLocalStorage('OPTIONS', self.OPTIONS());
		GH.setLocalStorage('DATA', data);
		GH.setLocalStorage('LAST', self.LAST);
		GH.notify('Data saved.');
	};

	self.exportData = function () {
		self.saveData();
		var regex1     = /"([A-Za-z0-9_]*)":/gm;
		var regex2     = /\{:/gm;
		var exportData =
			    `var OPTIONS = ${localStorage.getItem('OPTIONS').replace(regex1, "$1:").replace(regex2, '{"":')};\n` +
			    `var DATA = ${localStorage.getItem('DATA').replace(regex1, "$1:")};`;
		GH.export.createFile('DATA.txt', exportData);
		GH.notify('Data exported.');
	};
	self.loadData   = function () {
		var options = GH.getLocalStorage('OPTIONS');
		var data    = GH.getLocalStorage('DATA');
		var last    = GH.getLocalStorage('LAST');
		!$.isEmptyObject(options) && (OPTIONS = options);
		!$.isEmptyObject(data) && (DATA = data);
		!$.isEmptyObject(last) && (self.LAST = last);
	};

	self.init = function () {
		self.loadData();
		self.OPTIONS(OPTIONS);
		$.each(dataTypes, (dataType, model)=>self.DATA[dataType](DATA[dataType].map((data)=>new model(data))));
		self.saveData();
		self.FILTERS = new FiltersModel();

		addNewDialogInstance = new BootstrapDialog({
			size:        'size-extra-wide',
			autodestroy: false,
			onshow:      ()=>self.tmpModels.valueHasMutated(),
			onhide:      ()=>resetModel(),
			onhidden:    ()=>self.tmpModels([]),
			message:     `<div class="media-list" data-bind="foreach: $root.tmpModels"><!-- ko template: template --><!-- /ko --></div><div class="row" data-bind="template: 'preset-modal-new'"></div>`,
			buttons:     [
				{
					label:    'Cancel',
					cssClass: 'btn-sm btn-default col-xs-4 pull-left',
					action:   (dialogRef)=>dialogRef.close()
				}, {
					label:    'Confirm',
					cssClass: 'btn-sm btn-primary col-xs-7 pull-right',
					action:   (dialogRef)=> {
						self.tmpModels().forEach((model)=> {
							if (model.isNew()) {
								model.isNew(false);
								self.DATA[model.dataType].push(model)
							}
						});
						self.saveData();
						dialogRef.close();
					}
				}
			]
		});
		addNewDialogInstance.open();
		addNewDialogInstance.getModalHeader().hide();
		addNewDialogInstance.close();
	};
}