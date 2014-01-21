;(function(){

	"use strict";

	// imports
	
	// exports
	module.exports = Bar;

	// module
	function Bar (element, data, options) {

		// set options
		this.options(options);

		// init element
		this.element(element);

		// init data
		this.data(data);

		this.composite();

	}

	Bar.prototype.composite = function () {

		var data = this._data,
			html = '';

		if (data && data.length) {
			
			data.forEach(function (row) {

			});

		}

	};

	Bar.prototype.paint = function () {
		
	};

	/**
	 * Set options and attach to instance root
	 * @param  {Object} options
	 * @return this
	 */
	Bar.prototype.options = function (options) {

		// set property map
		if (options.propertyMap) {
			for (var key in this.defaults._propertyMap) {
				this._propertyMap[key] = options.propertyMap[key] || this.defaults._propertyMap[key];
			}
		}

		return this;

	};

	/**
	 * Default configuration
	 * @type {Object}
	 */
	Bar.prototype.defaults = {
		_data: {},
		_element: document.body,
		_propertyMap: {
			mean: 'mean',
			stddev: 'stddev',
			text: 'text'
		}
	};

	/**
	 * set data
	 * @param  {Array<Object>} data
	 * @return this
	 */
	Bar.prototype.data = function (data) {
		this._data = data || this.defaults._data;
		return this;
	};

	/**
	 * set element
	 * @param  {DOMElement} element
	 * @return this
	 */
	Bar.prototype.element = function (element) {
		this._element = element || this.defaults._element;
		return this;
	};

})();