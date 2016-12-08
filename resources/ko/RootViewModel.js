function RootViewModel(){
	var self = this;

	//region Main
	self.OPTIONS  = ko.observable();
	var dataTypes = {
		gear:        GearModel,
		chests:      ChestModel,
		events:      EventModel,
		monster:     MonsterModel,
		blacksmiths: BlacksmithModel
	};
	self.DATA     = {
		gear:        ko.observableArray(),
		chests:      ko.observableArray(),
		events:      ko.observableArray(),
		monster:     ko.observableArray(),
		blacksmiths: ko.observableArray(),
	};
	self.LAST     = {
		area:  '',
		stage: '',
	};

	self.sortData            = ()=>{
		$.each(self.DATA, (dataType, data)=>{
			GH.pauseFilter(dataType);
			var sortedData = data().sort((a, b)=>{
				var aS = a.sortKey();
				var bS = b.sortKey();
				if (dataType == 'monster') {
					a.sortLocations();
					b.sortLocations();
				}
				return aS == bS ? 0 : aS < bS ? -1 : 1;
			});
			self.DATA[dataType](sortedData);
			GH.resumeFilter(dataType);
		});
	};
	//endregion

	//region FilterData
	self.FILTERS             = null;
	var filterDialogInstance = null;
	self.openFilter          = ()=>filterDialogInstance.open();
	self.filteredData        = {
		gear:        ko.pauseablePureComputed(()=>filterBase('gear')),
		chests:      ko.pauseablePureComputed(()=>filterBase('chests')),
		events:      ko.pauseablePureComputed(()=>filterBase('events')),
		monster:     ko.pauseablePureComputed(()=>filterBase('monster')),
		blacksmiths: ko.pauseablePureComputed(()=>filterBase('blacksmiths')),
	};
	self.displayAmount = {};
	$.each(self.filteredData, (dataType,data)=>self.displayAmount[dataType] = ko.pureComputed(()=>data().length));
	self.getDisplayAmountSum = function (){
		var amount = 0;
		$.each(self.filteredData, (dataType, data)=>amount += data().length)
		return amount;
	}

	function filterBase(dataType){
		filtered = [];
		if (self.FILTERS != null) {
			var filtered = self.DATA[dataType]().filter(m=>m.filter(self.FILTERS.getFilter()));
			filtered.sort((a, b)=>{
				var aS = a.sortKey();
				var bS = b.sortKey();
				return aS == bS ? 0 : aS < bS ? -1 : 1;
			});
		}
		return filtered;
	}
	//endregion

	//region editing
	self.tmpModels           = ko.observableArray();
	self.addAnim             = elem=>{
		if (elem.nodeType === 1) {
			// var article = $(elem),
			//     offset = article.offset().top;
			/*animate({scrollBottom: 0}, 250)*/
			// ()=>$('#tmpModelsDialog').animate({scrollTop: $(document).height()-$(window).height()},500)
			$(elem).hide().slideDown(500);
		}
	};
	self.removeAnim          = elem=>elem.nodeType === 1 && $(elem).slideUp(500);
	var addNewDialogInstance = null;

	function resetTmpModels(){
		self.tmpModels().forEach(m=>m.additionalCss('').isTmp(false));
	}

	function confirmRemoveDialog(model, callback){
		var dialog = BootstrapDialog.confirm({
			title:           false,
			size:            BootstrapDialog.SIZE_SMALL,
			message:         `<div class="text-center"><h5>Are you sure you want to remove: </h5><h3>${model.name()}</h3></div>`,
			closable:        true,
			btnCancelHotkey: 27,
			btnOKHotkey:     13,
			type:            BootstrapDialog.TYPE_WARNING,
			callback:        r=>{
				callback(r);
				return true;
			}
		});
		dialog.getModalHeader().hide();
	}

	function addNewDialog(dataType, presetData, action = 'new', showModel = null){
		var model = null;
		if (typeof presetData.altDataType !== "undefined") {
			dataType = presetData.altDataType;
			delete presetData.altDataType;
		}
		switch (action) {
			case 'new':
				model = new dataTypes[dataType]();
				$.each(presetData, (k, v)=>{
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
		self.tmpModels.push(model);
		addNewDialogInstance.open();
	}

	self.createGear          = ()=>addNewDialog('gear', {});
	self.createChest         = ()=>addNewDialog('chests', {});
	self.createEvent         = ()=>addNewDialog('events', {});
	self.createMonster       = ()=>addNewDialog('monster', {});
	self.createBlacksmith    = ()=>addNewDialog('blacksmiths', {});
	self.createPresetModel   = m=>addNewDialog(m.dataType, m.getTmpPreset(), 'new');
	self.cloneModel          = m=>addNewDialog(m.dataType, m.export(), 'clone');
	self.loadOriginalModel   = m=>{
		var result = GH.findDuplicates(m)[0].locked(false).isTmp(true).additionalCss('showModel');
		self.tmpModels.replace(m, result);
		return result;
	};
	self.showModel           = m=>addNewDialog(m.dataType, {}, 'show', m);
	self.showDuplicateModels = m1=>{
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
	//endregion

	self.saveData   = ()=>GH.saveData();
	self.loadData   = function (){
		var options = GH.getLocalStorage('OPTIONS');
		var data    = GH.getLocalStorage('DATA');
		var last    = GH.getLocalStorage('LAST');
		!$.isEmptyObject(options) && (OPTIONS = options);
		!$.isEmptyObject(data) && (DATA = data);
		!$.isEmptyObject(last) && (self.LAST = last);
	};
	self.exportData = function (){
		self.saveData(true);
		var regex1     = /"([A-Za-z0-9_]*)":/gm;
		var regex2     = /\{:/gm;
		var exportData =
			    `var OPTIONS = ${localStorage.getItem('OPTIONS').replace(regex1, "$1:").replace(regex2, '{"":')};\n` +
			    `var DATA = ${localStorage.getItem('DATA').replace(regex1, "$1:")};`;
		GH.export.createFile('DATA.txt', exportData);
		GH.notify('See downloaded file.', 'Data exported.');
	};

	self.listMonsterFamilies = ko.pureComputed(()=>{
		var list = [""];
		GH.getData('monster')().forEach(m=>!list.includes(m.family()) && list.push(m.family()));
		return list.sort();
	})

	// self.btnSpanKeyboardAction = function (current, event, trigger){
	// 	[0, 13, 32].includes(event.keyCode) && trigger(current);
	// }

	self.init = function (){
		GH.timer.start('loading all')
		self.loadData();
		self.OPTIONS(OPTIONS);
		var filters  = GH.getLocalStorage('FILTERS');
		self.FILTERS = new FiltersModel(JSON.stringify(filters) != '{}' ? filters : undefined);
		GH.pauseFilter();
		$.each(dataTypes, (dataType, model)=>{
			GH.timer.start('loading '+dataType);
			self.DATA[dataType](DATA[dataType].map(data=>new model(data)))
			GH.timer.get('loading '+dataType);
		});

		filterDialogInstance = new BootstrapDialog({
			id:          'filtersDialog',
			title:       '<h1>Filters</h1>',
			autodestroy: false,
			onshow:      ()=>GH.pauseFilter(),
			onhide:      ()=>GH.resumeFilter(),
			message:     `<!-- ko template: 'template-filter' --><!-- /ko -->`,
			buttons:     [
				{
					label:    'Close',
					cssClass: 'btn-sm btn-primary col-xs-12',
					action:   dialogRef=>dialogRef.close()
				}
			]
		});
		addNewDialogInstance = new BootstrapDialog({
			id:              'tmpModelsDialog',
			size:            'size-extra-wide',
			autodestroy:     false,
			closeByBackdrop: false,
			closeByKeyboard: false,
			onshow:          ()=>{
				GH.pauseFilter();
				self.tmpModels.valueHasMutated();
			},
			onhide:          ()=>{
				resetTmpModels();
				GH.resumeFilter();
			},
			onhidden:        ()=>self.tmpModels([]),
			message:         `<!-- ko template: 'template-tmp' --><!-- /ko -->`,
			buttons:         [
				{
					label:    'Cancel',
					cssClass: 'btn-sm btn-default col-xs-4 pull-left',
					hotkey:   27,
					action:   dialogRef=>BootstrapDialog.confirm({
						size:            BootstrapDialog.SIZE_SMALL,
						title:           false,
						btnCancelHotkey: 27,
						btnOKHotkey:     13,
						message:         '<div class="text-center"><h4>New entries will be lost!</h4><h3>Close Temporary Editor?</h3></div>',
						callback:        r=>{
							r && dialogRef.close();
							return true;
						}
					})
				}, {
					label:    'Confirm',
					cssClass: 'btn-sm btn-primary col-xs-7 pull-right',
					action:   dialogRef=>{
						self.tmpModels().forEach(model=>{
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

		filterDialogInstance.open();
		addNewDialogInstance.open();
		addNewDialogInstance.getModalHeader().hide();
		filterDialogInstance.close();
		addNewDialogInstance.close();

		Mousetrap.bind(['1', 'alt+1'], ()=>{
			self.createGear();
			return false;
		});
		Mousetrap.bind(['2', 'alt+2'], ()=>self.createChest(), false);
		Mousetrap.bind(['3', 'alt+3'], ()=>{
			self.createEvent();
			return false;
		});
		Mousetrap.bind(['4', 'alt+4'], ()=>{
			self.createMonster();
			return false;
		});
		Mousetrap.bind(['5', 'alt+5'], ()=>{
			self.createBlacksmith();
			return false;
		});
		Mousetrap.bind(['alt+6', 'ctrl+shift+f'], ()=>{
			$('#filtersModal').modal('toggle');
			return false;
		});
		Mousetrap.bind(['ctrl+shift+s'], ()=>{
			self.sortData();
			return false;
		});
		Mousetrap.bind(['ctrl+s'], ()=>{
			GH.saveData();
			return false;
		});
		Mousetrap.bind(['ctrl+e'], ()=>{
			self.exportData();
			return false;
		});
		Mousetrap.bind(['ctrl+shift+r'], ()=>{
			GH.clearLocalStorage();
			return false;
		});

		GH.resumeFilter();
		self.FILTERS.location.stage.notifySubscribers();
		GH.timer.get('loading all');
	};
}