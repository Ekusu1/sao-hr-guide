var helpers = new function () {
	var self = this;

	/** @param {boolean} show */
	self.showLoader = (show) => $('#loading')['fade' + show ? 'In' : 'Out'](50);

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
	 * @returns {number}
	 */
	self.getNewId = (dataName) => {
		var ids = window.rootView.data[dataName]().filter((v)=>v.id());
		return Math.max(0, ...ids) + 1;
	};

	/**
	 * @param {string} dataName
	 * @param {string} searchKey
	 * @param {*} searchValue
	 * @returns {Array}
	 */
	self.findByKeyValue = function (dataName, searchKey, searchValue) {
		var returnValue = [];
		var data        = window.rootView.data[dataName]();

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
		var sort       = rootView.OPTIONS().sort[type];
		var sortNumber = sort[key] !== undefined ? sort[key] : 0;
		return self.padNumber(sortNumber);
	}

	self.data = {
		/**
		 * @param model
		 */
		create: function (model) {
			window.rootView.data[model.dataName].push(model);
		},
		/**
		 * @param model
		 */
		edit:   function (model) {
			var index = self.findById(model.dataName, model.id);
			window.rootView.data[model.dataName].replace(index, model);
		},
		/**
		 * @param model
		 */
		remove: function (model) {
			window.rootView.data[model.dataName].remove(model);
		}
	};

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
	self.getLocalStorage = (key)=>JSON.parse(localStorage.getItem(key) || '{}');

	return self;
};