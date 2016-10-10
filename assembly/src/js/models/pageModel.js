/* global Backbone, pages*/
/* exported PageModel */
var PageModel = Backbone.View.extend({
	/**
	 * initialize will initialize the Page model
	 * with default setting
	 * @param  {number} pageIndex index of selected page
	 * @returns {undefined}
	 */
	initialize: function(pageIndex){
		var pageName = "page" + pageIndex;
		this.page = pages[pageName];
	}
});