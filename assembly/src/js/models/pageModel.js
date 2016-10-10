/* global Backbone, pages*/
/* exported PageModel */
var PageModel = Backbone.View.extend({
	initialize: function(pageIndex){
		var pageName = "page" + pageIndex;
		this.page = pages[pageName];
	}
});