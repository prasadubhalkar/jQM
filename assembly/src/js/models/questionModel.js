/* global Backbone, AnswerModel, _*/
/* exported QuestionModel */
var QuestionModel = Backbone.Model.extend({
	defaults: {
		title:  "",
		type: "",
		questionId: "",
		correctanswerId: "",
		description: "",
		answers: null
	},
	/**
	 * initialize will initialize the Page model
	 * with default setting
	 * @param  {object} question the actual question content object
	 * @returns {undefined}
	 */
	initialize: function(question){
		this.title = question.title;
		this.type = question.type;
		this.questionId = question.questionId;
		this.correctanswerId = question.correctanswerId;
		this.description = question.description;
		this.answers = [];
		this.setUpAnswers(question.answers);
	},

	/**
	 * setUpAnswers will set the answers for this
	 * question
	 * @param {array} answers an array of answers
	 * @returns {undefined}
	 */
	setUpAnswers: function(answers){
		var answerModel = null;
		var self = this;
		_.each(answers, function(answer){
			answerModel = new AnswerModel(answer);
			self.answers.push(answerModel);
		});
	}
});