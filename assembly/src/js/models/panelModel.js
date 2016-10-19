/* global Backbone, indexItems*/
/* exported PanelModel */
var PanelModel = Backbone.Model.extend({
	/**
	 * initialize initiate the model with
	 * list of table of content for the application
	 * @returns {undefined}
	 */
	initialize: function(){
		this.index = indexItems;
	}
});