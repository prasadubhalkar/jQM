/* global Backbone, QuestionModel, _*/
/* exported QuestionsCollection */
var QuestionsCollection = Backbone.Collection.extend({
	model: QuestionModel,

	/**
	 * getQuestions will get all the questions 
	 * added to the collection for a page
	 * @returns {object} list of questions under collection
	 */
	getQuestions: function(){
		var questions = [];
		_.each(this.models, function(question){
			questions.push(question.attributes);
		});
		return questions;
	}
});