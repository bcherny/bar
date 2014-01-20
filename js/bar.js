;(function(){

	"use strict";

	// imports
	
	// exports
	module.exports = Bar;

	// module
	function Bar (element, data) {

		// init element
		this.element(element);

		// init data
		this.data(data);

	}

	/**
	 * Default configuration
	 * @type {Object}
	 */
	Bar.prototype.defaults = {
		_data: {},
		_element: document.body
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