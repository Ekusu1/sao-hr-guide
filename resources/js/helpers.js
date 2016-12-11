var GH = new function (){
	var self = this;

	/** @param {boolean} show */
	self.showLoader = function (show = true){
		var $loading = $('#loading');
		if (show) {
			$loading.fadeIn(1000);
		} else {
			$loading.fadeOut(1000);
		}
	}

	/**
	 * @param {number} duration in ms
	 * @param {function} callback
	 */
	self.load = function (duration = 1000, callback = ()=>{}){
		self.showLoader(true);
		setTimeout(()=>{
			callback();
			self.showLoader(false);
		}, duration)
	};

	/**
	 * RFC4122 version 4 compliant unique id creator.
	 *
	 * Added by https://github.com/tufanbarisyildirim/
	 *
	 *  @returns {String}
	 */
	self.newGuid = function (){
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c){
			var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});
	};

	/**
	 * @param {string} dataName
	 * @param {string} searchKey
	 * @param {*} searchValue
	 * @returns {Array}
	 */
	self.findByKeyValue = function (dataName, searchKey, searchValue){
		return self.getData(dataName)().slice().filter((model, index)=>model[searchKey]() === searchValue)
	};

	/**
	 * @param {string} dataName
	 * @param {number} id
	 * @returns {Object}
	 */
	self.findById = function (dataName, id){
		return self.findByKeyValue(dataName, 'id', id)[0] || null;
	};

	/**
	 *
	 * @param {string} dataName
	 * @param {string} name
	 * @returns {Array}
	 */
	self.findByName = function (dataName, name){
		return self.findByKeyValue(dataName, 'name', name);
	};

	self.getOptions  = function (tree = ''){
		var options = JSON.parse(JSON.stringify(rootView.OPTIONS()));
		tree && tree.split(DEFAULT_TREE_SEPERATOR).forEach(k=>options = options[k]);
		return options;
	}
	self.setOptions  = function (tree = '', value){
		rootView.OPTIONS(value);
	}
	self.isNewOption = function (optionTree, value){
		return value !== '' && !self.getOptions(optionTree).includes(value);
	}

	self.getData = function (dataType = ''){
		return rootView.DATA[dataType] || rootView.DATA;
	}

	self.getLast = function (key){
		return key != undefined && key != '' ? rootView.LAST()[key] : rootView.LAST();
	}
	self.setLast = function (key, value){
		rootView.LAST()[key] = value;
	}

	self.findDuplicates = function (m1){
		var id        = m1.id(),
		    checkData = m1.getDuplicateCheckData();
		return self.getData(m1.dataType)().filter(m2=>
			id != m2.id() &&
			checkData == m2.getDuplicateCheckData()
		);
	};

	self.showModel = function (model){
		rootView.showModel(model);
	}
	/**
	 *
	 * @param m1 current model
	 * @param m1Identifier current value to check
	 * @param m2DataType dataType to check, defaults to "m1.dataType"
	 * @param m2Identifier other value to check , defaults to "m1Identifier"
	 * @returns {boolean}
	 */
	self.isNewData = function (m1, m1Identifier, m2DataType = m1.dataType, m2Identifier = m1Identifier){
		if (!m1Identifier) return false;
		var current = m1[m1Identifier]();
		return current != '' && !(self.getData(m2DataType)().some(m2=>current === m2[m2Identifier]()));
	}

	self.pauseFilter = function (dataType = 'all'){
		if (dataType != 'all') {
			rootView.filteredData[dataType].pause();
		} else {
			$.each(rootView.filteredData, (dataType, data)=>data.pause());
			console.log(`paused ${dataType} filters`);
		}
	}

	self.resumeFilter = function (dataType = 'all'){
		if (dataType != 'all') {
			rootView.filteredData[dataType].resume();
			rootView.DATA[dataType].notifySubscribers();
		} else {
			$.each(rootView.filteredData, (dataType, data)=>{
				data.resume();
				// rootView.DATA[dataType].notifySubscribers();
				console.log(`resumed ${dataType} filters`);
			});
		}
	}

	self.padNumber = function (number, width = 4, padChar = '0'){
		number = number + '';
		return number.length >= width ? number : new Array(width - number.length + 1).join(padChar) + number;
	}

	/**
	 *
	 * @param {stages|itemType|itemRarity|chestRarity|monsterType|string} type stages / chestRarity / itemType
	 * @param {string} key
	 * @returns {number}
	 */
	self.getSortNumber = function (type, key){
		var sort       = self.getOptions("sort." + type);
		var sortNumber = sort[key] !== undefined ? sort[key] : 0;
		return self.padNumber(sortNumber);
	}

	self.modelBaseGenerator = function (model){
		model.id            = ko.observable(self.newGuid());
		model.isTmp         = ko.observable(false);
		model.isNew         = ko.observable(false);
		model.locked        = ko.observable(DEFAULT_LOCK_STATUS);
		model.switchLock    = ()=>model.locked(!model.locked());
		model.additionalCss = ko.observable('');
		model.isDuplicate   = ko.pureComputed(()=>self.findDuplicates(model).length > 0);
	};
	self.iconCssGenerator   = function (parts = []){
		return parts.join('-').toLowerCase().replace(' ', '-');
	}
	self.mediaCssGenerator  = function (model, add = []){
		var css = {};

		css['hasMissingData']      = model.hasMissingData();
		css['duplicateModel']      = model.isDuplicate();
		css[model.additionalCss()] = true;


		add.forEach((v)=>{
			typeof v === 'string' && (css[v] = true);
			typeof v === 'Object' && (css[v.v] = v.c);
		});

		return css;
	}


	self.export = {
		/**
		 * @param {string} filename
		 * @param {string} text
		 */
		createFile: function (filename, text){
			var element = document.createElement('a');
			element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
			element.setAttribute('download', filename);

			element.style.display = 'none';
			document.body.appendChild(element);
			element.click();
			document.body.removeChild(element);
		}
	};

	self.setLocalStorage   = (key, value)=>{
		localStorage.getItem(key) === null && localStorage.setItem(key, JSON.stringify({}))
		localStorage.setItem(key, JSON.stringify(value))
	}
	self.getLocalStorage   = key=>JSON.parse(localStorage.getItem(key) || '{}');
	self.clearLocalStorage = function (altMsg = false){
		!altMsg && (altMsg = "Are you sure you want to clear all saved Data?");
		var dialog = BootstrapDialog.confirm({
			title:    false,
			size:     BootstrapDialog.SIZE_SMALL,
			message:  `<div class="text-center"><h5>${altMsg}</h5></div>`,
			closable: true,
			type:     BootstrapDialog.TYPE_WARNING,
			callback: function (result){
				if (result) {
					$(window).off();
					localStorage.clear();
					self.notify('Data cleared.');
					location.reload();
				}
			}
		});
		dialog.getModalHeader().hide();
	};

	self.saveData = function (sort = false){
		sort && rootView.sortData();
		var saveData = {};
		$.each(self.getData(), (dataType, data)=>saveData[dataType] = data().map(m=>m.export()));
		GH.setLocalStorage('OPTIONS', self.getOptions());
		GH.setLocalStorage('DATA', saveData);
		GH.setLocalStorage('LAST', GH.getLast());
		GH.setLocalStorage('FILTERS', rootView.FILTERS.export());
		GH.notify('Data saved.');
	};

	self.notify = function (msg = '', title = undefined, type = 'success'){
		toastr[type](msg, title)
	}

	self.timer = new function (){
		var timerSelf = this;
		var timers = {};

		timerSelf.start = function (name){
			timers[name] = {
				start: performance.now(),
				end: null
			}
		}
		timerSelf.stop = function (name){
			timers[name].end = performance.now();
		}
		timerSelf.get = function (name){
			timers[name].end == null && (timers[name].end = performance.now());
			var s = timers[name].start;
			var e = timers[name].end;
			var d = e - s;
			var units = {
				ms: ()=>parseFloat(d).toFixed(3),
				s: ()=>parseFloat(d/1000).toFixed(3),
				m: ()=>parseFloat(d/60000).toFixed(3)
			};
			d < 60000 && (unit = 's');
			d < 1000 && (unit = 'ms');
			var result = units[unit]();
			console.log(`${result} ${unit} ${name}`);
			return result;
		}
	}

	return self;
};