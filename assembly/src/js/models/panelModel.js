/* global Backbone, indexItems*/
/* exported PanelModel */
var PanelModel = Backbone.View.extend({
	initialize: function(){
		this.index = indexItems;
	}
});