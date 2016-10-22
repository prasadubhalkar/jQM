/* global Backbone*/
/* exported AnswerModel */
var AnswerModel = Backbone.Model.extend({
	/**
	 * initialize will initialize the Answer model
	 * with default setting
	 * @param  {object} answer the actual answer content object
	 * @returns {undefined}
	 */
	initialize: function(answer){
		this.label = answer.label;
		this.answerId = answer.answerId;
		this.isSelected = answer.isSelected;
	}
});