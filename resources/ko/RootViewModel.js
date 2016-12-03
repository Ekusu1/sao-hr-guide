function RootViewModel() {
	var self = this;

	self.OPTIONS  = ko.observable();
	var dataTypes = {
		gear:    GearModel,
		chests:  ChestModel,
		events:  EventModel,
		monster: MonsterModel,
		blacksmiths: BlacksmithModel
	};
	self.DATA     = {
		gear:    ko.observableArray(),
		chests:  ko.observableArray(),
		events:  ko.observableArray(),
		monster: ko.observableArray(),
		blacksmiths: ko.observableArray(),
	};
	self.LAST     = {
		area:  '',
		stage: '',
	};

	self.filteredData = {
		gear: ko.pauseablePureComputed(()=>filterBase('gear')),
		chests: ko.pauseablePureComputed(()=>filterBase('chests')),
		events: ko.pauseablePureComputed(()=>filterBase('events')),
		monster: ko.pauseablePureComputed(()=>filterBase('monster')),
		blacksmiths: ko.pauseablePureComputed(()=>filterBase('blacksmiths')),
	};
	function pauseFilter () {
		$.each(self.filteredData, (dataType, data)=>data.pause());
	}
	function resumeFilter () {
		$.each(self.filteredData, (dataType, data)=>{
			data.resume()
			self.DATA[dataType].notifySubscribers();
		});
	}
	self.FILTERS           = null;
	function filterBase (dataType) {
		if (self.FILTERS == null) return [];
		var filters = self.FILTERS.getFilter();
		var filterResult = self.DATA[dataType]();
		filters.filtersActive && (filterResult = filterResult.filter(m=>m.filter(filters)));
		return filterResult;
	}
	var filterDialogInstance = null;
	self.openFilter = ()=>filterDialogInstance.open();

	self.sortData = ()=> {
		pauseFilter();
		$.each(self.DATA, (dataType, data)=> {
			var sortedData = data().sort((a, b)=>{
				if(dataType == 'monster') { a.sortLocations(); b.sortLocations(); }
				return a.sortKey() == b.sortKey() ? 0 : a.sortKey() < b.sortKey() ? -1 : 1;
			});
			self.DATA[dataType](sortedData);
		});
		resumeFilter();
	};

	self.tmpModels           = ko.observableArray();
	var addNewDialogInstance = null;

	function resetTmpModels() {
		self.tmpModels().forEach(m=>m.additionalCss('').isTmp(false));
	}

	function confirmRemoveDialog(model, callback) {
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

	function addNewDialog(dataType, presetData, action = 'new', showModel = null) {
		var model = null;
		if (typeof presetData.altDataType !== "undefined") {
			dataType = presetData.altDataType;
			delete presetData.altDataType;
		}
		switch (action) {
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
				model.isNew(true).locked(false).additionalCss('newModel');
				break;
			case 'clone':
				model = new dataTypes[dataType](presetData);
				model.isNew(true).locked(false).additionalCss('cloneModel');
				break;
			case 'show':
				model = showModel;
				model.isNew(false).locked(true).additionalCss('showModel');
				break;
			case 'duplicate':
				model = showModel;
				model.isNew(false).locked(false);
				break;
		}
		model.isTmp(true);
		if (action == 'show' && self.tmpModels().includes(model)) {
			 self.tmpModels.remove(model);
		}
		self.tmpModels.push(model)
		addNewDialogInstance.open();
	}

	self.createGear          = ()=>addNewDialog('gear', {});
	self.createChest         = ()=>addNewDialog('chests', {});
	self.createEvent         = ()=>addNewDialog('events', {});
	self.createMonster       = ()=>addNewDialog('monster', {});
	self.createBlacksmith       = ()=>addNewDialog('blacksmiths', {});
	self.createPresetModel   = m=>addNewDialog(m.dataType, m.getTmpPreset(), 'new');
	self.cloneModel          = m=>addNewDialog(m.dataType, m.export(), 'clone');
	self.loadOriginalModel   = m=>self.tmpModels.replace(m, GH.findDuplicates(m)[0].locked(false).isTmp(true).additionalCss('showModel'));
	self.showModel           = m=>addNewDialog(m.dataType, {}, 'show', m);
	self.showDuplicateModels = m1=> {
		var duplicates = GH.findDuplicates(m1);
		if (duplicates) {
			duplicates.forEach(m2=>m2.additionalCss('duplicateFoundModel'));
			m1.additionalCss('duplicateModel');
			duplicates.unshift(m1);
			duplicates.forEach(m=>!self.tmpModels().includes(m) && addNewDialog(m.dataType, {}, 'duplicate', m));
		}
	};
	self.removeMainModel     = m=>confirmRemoveDialog(m, r=>(r && self.DATA[m.dataType].remove(m)));
	self.removeTmpModel      = m=>confirmRemoveDialog(m, r=>(r && self.tmpModels.remove(m)));
	self.removeTmpMainModel  = m=>confirmRemoveDialog(m, r=>r && self.tmpModels.remove(m), self.DATA[m.dataType].remove(m));

	self.saveData = ()=>GH.saveData();
	self.exportData = function () {
		self.saveData();
		var regex1     = /"([A-Za-z0-9_]*)":/gm;
		var regex2     = /\{:/gm;
		var exportData =
			    `var OPTIONS = ${localStorage.getItem('OPTIONS').replace(regex1, "$1:").replace(regex2, '{"":')};\n` +
			    `var DATA = ${localStorage.getItem('DATA').replace(regex1, "$1:")};`;
		GH.export.createFile('DATA.txt', exportData);
		GH.notify('See downloaded file.', 'Data exported.');
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
		self.FILTERS = new FiltersModel(GH.getLocalStorage('FILTERS'));
		pauseFilter();
		$.each(dataTypes, (dataType, model)=>self.DATA[dataType](DATA[dataType].map(data=>new model(data))));
		resumeFilter();

		filterDialogInstance = new BootstrapDialog({
			autodestroy: false,
			onshow:      ()=>pauseFilter(),
			onhide:      ()=>resumeFilter(),
			message:     `<!-- ko template: 'template-filter' --><!-- /ko -->`,
			buttons:     [
				{
					label:    'Close',
					cssClass: 'btn-sm btn-primary col-xs-12',
					action:   dialogRef=>dialogRef.close()
				}
			]
		});
		filterDialogInstance.open();
		filterDialogInstance.getModalHeader().hide();
		filterDialogInstance.close();

		addNewDialogInstance = new BootstrapDialog({
			size:        'size-extra-wide',
			autodestroy: false,
			onshow:      ()=>self.tmpModels.valueHasMutated(),
			onhide:      ()=>resetTmpModels(),
			onhidden:    ()=>self.tmpModels([]),
			message:     `<section class="media-list" data-bind="foreach: $root.tmpModels"><!-- ko template: template --><!-- /ko --></section><div class="row" data-bind="template: 'preset-modal-new'"></div>`,
			buttons:     [
				{
					label:    'Cancel',
					cssClass: 'btn-sm btn-default col-xs-4 pull-left',
					action:   dialogRef=>dialogRef.close()
				}, {
					label:    'Confirm',
					cssClass: 'btn-sm btn-primary col-xs-7 pull-right',
					action:   dialogRef=> {
						self.tmpModels().forEach(model=> {
							model.locked(DEFAULT_LOCK_STATUS);
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

		// map multiple combinations to the same callback
		Mousetrap.bind(['alt+1'], function() { self.createGear(); return false; });
		Mousetrap.bind(['alt+2'], function() { self.createChest(); return false; });
		Mousetrap.bind(['alt+3'], function() { self.createEvent(); return false; });
		Mousetrap.bind(['alt+4'], function() { self.createMonster(); return false; });
		Mousetrap.bind(['alt+5'], function() { self.createBlacksmith(); return false; });
		Mousetrap.bind(['alt+6', 'ctrl+shift+f'], function() { $('#filtersModal').modal('toggle'); return false; });
		Mousetrap.bind(['ctrl+shift+s'], function() { self.sortData(); return false; });
		Mousetrap.bind(['ctrl+s'], function() { GH.saveData(); return false; });
		Mousetrap.bind(['ctrl+e'], function() { self.exportData(); return false; });
		Mousetrap.bind(['ctrl+shift+r'], function() { GH.clearLocalStorage(); return false; });
	};
}