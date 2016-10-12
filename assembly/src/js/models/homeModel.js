/* global Backbone, homeIntro*/
/* exported HomeModel */
var HomeModel = Backbone.View.extend({
	/**
	 * initialize will initialize the Page model
	 * with default setting
	 * @returns {undefined}
	 */
	initialize: function(){
		this.introModel = homeIntro;
	}
});