/* global Backbone, AppTmplts, AnswerView, _ , $*/
/* exported QuestionView */
var QuestionView = Backbone.View.extend({
	//define default template for the view
	template:AppTmplts["src/html/partials/question.hbs"],
	//bind the view level events
	events: {
		"change input[type='radio']": "answerSelected"
	},

	/**
	 * initialize set initial parameters for the Page View
	 * @param  {object} question current question object
	 * @returns {undefined}
	 */
	initialize: function(question) {
		this.model = question;
		this.render();
		this.checkIfAlreayAnswered();
	},

	/**
	 * render will initiate the render
	 * process for the view
	 * @returns {object} backbone view object
	 */
	render: function(){
		var $el = $(this.el);
		var model = this.model;
		$el.append(this.template({
			title: model.title,
			questionId: model.questionId
		}));

		this.renderChoices();

		return this;
	},

	/**
	 * renderChoices will initiate the render
	 * process for all answers for the question
	 * @returns {undefined}
	 */
	renderChoices: function(){
		var $el = $(this.el);
		var model = this.model;
		var choices = model.answers;
		var questionId = model.questionId;
		var choicesElement = $('#answers_'+questionId, $el);
		_.each(choices, function(choice){
			choicesElement.append(new AnswerView(choice, questionId).el);
		});
	},

	/**
	 * answerSelected this is an event handling function
	 * that will be called whenever and choice for answer
	 * for a question is selected
	 * @param  {object} event jQuery click event
	 * @returns {undefined}
	 */
	answerSelected: function(event){
		//get the label element for selected answer
		var siblingLabel = $(event.target).siblings("label");
		var questionId = $(event.target).attr("name");
		var model = this.model;
		var correctAnswerId = model.correctanswerId;

		//if selected answer is correct answer
		if(event.target.id === correctAnswerId) {
			siblingLabel.addClass("correct-answer");
			this.markUsersAnswer(true);
		}
		//else if answer is not correct answer
		else {
			siblingLabel.addClass("wrong-answer");
			this.markUsersAnswer(false, event.target.id);
		}
		this.disableRadios(questionId);
	},

	/**
	 * markUsersAnswer will mark the users response
	 * true if answered correctly false if not
	 * @param  {boolean} userResponse user response
	 * @param {string} selectedAnswer user selected answer
	 * @returns {undefined}
	 */
	markUsersAnswer: function(userResponse, selectedAnswer){
		this.model.markUserResponse(userResponse, selectedAnswer);
	},

	/**
	 * checkIfAlreayAnswered if question is been already
	 * answered display it so when page reloaded
	 * @returns {undefined}
	 */
	checkIfAlreayAnswered: function(){
		var $el = $(this.el);
		var model = this.model;
		var questionId = model.questionId;
		var $question = $("input[name='"+questionId+"'", $el);
		var $answer = $("input[id='"+model.selectedAnswer+"'", $el);
		var answeredClass = (model.answeredCorrectly) ? "correct-answer" :"wrong-answer";
		if(model.selectedAnswer){
			$question.checkboxradio();
			$question.prop("disabled", true).checkboxradio("refresh");
			$answer.siblings("label").addClass(answeredClass);
		}
	},

	/**
	 * disableRadios will disable radio buttons for
	 * the question once an answer is selected
	 * @param  {string} questionId the question identifier
	 * @returns {undefined}
	 */
	disableRadios: function(questionId){
		var $el = $(this.el);
		$("input[name='"+questionId+"'", $el).prop("disabled", true).checkboxradio("refresh");
	}
});