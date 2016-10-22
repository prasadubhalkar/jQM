/* global Backbone, AnswerModel, _*/
/* exported QuestionModel */
var QuestionModel = Backbone.Model.extend({
	/**
	 * initialize will initialize the Page model
	 * with default setting
	 * @param  {object} question the actual question content object
	 * @returns {undefined}
	 */
	initialize: function(){
	},

	/**
	 * setUpQuestionData will setup the question
	 * data based on the question contents
	 * @param {object} question question contents
	 * @returns {undefined}
	 */
	setUpQuestionData: function(question){
		this.title = question.title;
		this.type = question.type;
		this.questionId = question.questionId;
		this.correctanswerId = question.correctanswerId;
		this.description = question.description;
		this.answers = [];
		this.answeredCorrectly = null;
		this.selectedAnswer = (question.selectedAnswer) ? question.selectedAnswer : undefined;
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
			answer.isSelected = (answer.answerId === this.selectedAnswer);
			answerModel = new AnswerModel(answer);
			self.answers.push(answerModel);
		});
	},

	/**
	 * updateSelectedAnswer will update the user
	 * selected choice under the answer collection
	 * @returns {undefined}
	 */
	updateSelectedAnswer: function(){
		var self = this;
		_.each(this.answers, function(answer){
			if(answer.answerId === self.selectedAnswer){
				answer.isSelected = true;
			}
		});
	},

	/**
	 * markUserResponse will make a note if user
	 * response for this questions was correct
	 * or wrong
	 * @param  {boolean} answeredCorrectly user response
	 * @param {string} selectedAnswer user selected answer
	 * @returns {undefined}
	 */
	markUserResponse: function(answeredCorrectly, selectedAnswer){
		this.selectedAnswer = (!answeredCorrectly) ? selectedAnswer : this.correctanswerId;
		this.updateSelectedAnswer();
		this.answeredCorrectly = answeredCorrectly;
		this.parent.questionAnswered(answeredCorrectly);
	},

	/**
	 * resetQuestion will reset all user
	 * action data for question
	 * @returns {undefined}
	 */
	resetQuestion: function(){
		this.answeredCorrectly = null;
		this.selectedAnswer = undefined;	
	}
});