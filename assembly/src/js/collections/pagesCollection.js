/* global Backbone, PageModel, _*/
/* exported PagesCollection */
var PagesCollection = Backbone.Collection.extend({
	model: PageModel,

	/**
	 * getPage will get the specific page object
	 * from the page collection
	 * @param {string} pageIndex page index
	 * @returns {object} found page for that index
	 */
	getPage: function(pageIndex){
		var foundPage = null;
		_.each(this.models, function(model){
			if(model.pageIndex === pageIndex){
				foundPage = model;
			}
		});
		return foundPage;
	}
});