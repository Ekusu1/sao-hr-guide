var GH = new function () {
	var self = this;

	/** @param {boolean} show */
	self.showLoader = function (show = true) {
		var $loading = $('#loading');
		if (show) {
			$loading.fadeIn(50);
		} else {
			$loading.fadeOut(50);
		}
	}

	/**
	 * @param {number} duration in ms
	 * @param {function} callback
	 */
	self.load = function (duration = 1000, callback = ()=> {}) {
		self.showLoader(true);
		setTimeout(()=> {
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
	self.newGuid = function () {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
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
	self.findByKeyValue = function (dataName, searchKey, searchValue) {
		var returnValue = [];
		var data        = self.getData(dataName)().slice();

		data.forEach((model, index)=> {
			if (model[searchKey]() === searchValue) {
				returnValue.push({index, model});
			}
		});

		return returnValue;
	};

	/**
	 * @param {string} dataName
	 * @param {number} id
	 * @returns {Object}
	 */
	self.findById = function (dataName, id) {
		return self.findByKeyValue(dataName, 'id', parseInt(id))[0];
	};

	/**
	 *
	 * @param {string} dataName
	 * @param {string} name
	 * @returns {Array}
	 */
	self.findByName = function (dataName, name) {
		return self.findByKeyValue(dataName, 'name', name);
	};

	self.getOptions = function (tree = '') {
		var options = JSON.parse(JSON.stringify(rootView.OPTIONS()));
		tree && tree.split(DEFAULT_TREE_SEPERATOR).forEach(k=>options = options[k]);
		return options;
	}
	self.getData = function (dataType = '') {
		return rootView.DATA[dataType] || rootView.DATA;
	}
	self.getLast = function (key) {
		return rootView.LAST[key] || rootView.LAST;
	}
	self.setLast = function (key, value) {
		rootView.LAST[key] = value;
	}

	self.findDuplicates = function (m1) {
		var id = m1.id(),
		    checkData = m1.getDuplicateCheckData();
		return self.getData(m1.dataType)().filter(m2=>
			id != m2.id() &&
			checkData == m2.getDuplicateCheckData()
		);
	};

	self.isNewOption = function (optionTree, value) {
		return value !== '' && !self.getOptions(optionTree).includes(value);
	}
	self.showModel = function (model) {
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
	self.isNewData = function (m1, m1Identifier, m2DataType = m1.dataType, m2Identifier = m1Identifier) {
		if (!m1Identifier) return false;
		var current = m1[m1Identifier]();
		return current != '' &&
			!(self.getData(m2DataType)().some(m2=>current === m2[m2Identifier]()));
	}

	self.padNumber = function (number, width = 4, padChar = '0') {
		number = number + '';
		return number.length >= width ? number : new Array(width - number.length + 1).join(padChar) + number;
	}

	/**
	 *
	 * @param {stages|itemType|itemRarity|chestRarity|monsterType|string} type stages / chestRarity / itemType
	 * @param {string} key
	 * @returns {number}
	 */
	self.getSortNumber = function (type, key) {
		var sort       = self.getOptions("sort."+type);
		var sortNumber = sort[key] !== undefined ? sort[key] : 0;
		return self.padNumber(sortNumber);
	}

	self.export = {
		/**
		 * @param {string} filename
		 * @param {string} text
		 */
		createFile: function (filename, text) {
			var element = document.createElement('a');
			element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
			element.setAttribute('download', filename);

			element.style.display = 'none';
			document.body.appendChild(element);
			element.click();
			document.body.removeChild(element);
		}
	};

	self.setLocalStorage = (key, value)=> {
		localStorage.getItem(key) === null && localStorage.setItem(key, JSON.stringify({}))
		localStorage.setItem(key, JSON.stringify(value))
	}
	self.getLocalStorage = key=>JSON.parse(localStorage.getItem(key) || '{}');
	self.clearLocalStorage = function (altMsg = false) {
		!altMsg && (altMsg = "Are you sure you want to clear all saved Data?");
		var dialog = BootstrapDialog.confirm({
			title:    false,
			size:     BootstrapDialog.SIZE_SMALL,
			message:  `<div class="text-center"><h5>${altMsg}</h5></div>`,
			closable: true,
			type:     BootstrapDialog.TYPE_WARNING,
			callback: function (result) {
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

	self.saveData = function () {
		rootView.sortData();
		var saveData = {};
		$.each(self.getData(), (dataType, data)=>saveData[dataType] = data().map(m=>m.export()));
		GH.setLocalStorage('OPTIONS', self.getOptions());
		GH.setLocalStorage('DATA', saveData);
		GH.setLocalStorage('LAST', GH.getLast());
		GH.setLocalStorage('FILTERS', rootView.FILTERS.export());
		GH.notify('Data saved.');
	};

	self.notify = function (msg = '', title = undefined, type = 'success') {
		toastr.options = {
			"closeButton": false,
			"debug": false,
			"newestOnTop": false,
			"progressBar": true,
			"positionClass": "toast-top-right",
			"preventDuplicates": true,
			"onclick": null,
			"showDuration": "300",
			"hideDuration": "300",
			"timeOut": "2000",
			"extendedTimeOut": "1000",
			"showEasing": "swing",
			"hideEasing": "linear",
			"showMethod": "slideDown",
			"hideMethod": "slideUp"
		}

		toastr[type](msg, title)
	}

	return self;
};