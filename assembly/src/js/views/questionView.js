/* global Backbone, AppTmplts, AnswerView, _ , $*/
/* exported QuestionView */
var QuestionView = Backbone.View.extend({
	//define default template for the view
	template:AppTmplts["src/html/partials/question.hbs"],
	//bind the view level events
	events: {
		"change input[type='radio']": "answerSelected",
		"click span.question-info": "showQuestionInfo"
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
			questionId: model.questionId,
			description: model.description
		}));

		$("#info_"+model.questionId, $el).hide();
		$("#desc_"+model.questionId, $el).hide();
		
		$el.attr("id", model.questionId);

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
	 * showQuestionInfo will show the question
	 * related information
	 * @returns {undefined}
	 */
	showQuestionInfo: function(){
		var $el = $(this.el);
		var model = this.model;
		$("#desc_"+model.questionId, $el).toggle("slow");
		$('#answers_'+model.questionId, $el).toggle("slow");
	},

	/**
	 * answerSelected this is an event handling function
	 * that will be called whenever and choice for answer
	 * for a question is selected
	 * @param  {object} event jQuery click event
	 * @returns {undefined}
	 */
	answerSelected: function(event){
		this.updateSelectedAnswer(event.target.id);
		this.updateQuestionDescription();
		this.disableRadios();
	},

	/**
	 * updateSelectedAnswer will update the answer
	 * display for selected user choice and update model
	 * @param  {object} answerId selected Answer id
	 * @returns {undefined}
	 */
	updateSelectedAnswer: function(answerId){
		var $el = $(this.el);
		var $answer = $("input[id='"+answerId+"'", $el);
		if(answerId === this.model.correctanswerId) {
			$answer.siblings("label").addClass("correct-answer");
			this.updateAnswerInModel(true);
		}
		else {
			$answer.siblings("label").addClass("wrong-answer");
			this.updateAnswerInModel(false, answerId);
		}
	},

	/**
	 * updateQuestionDescription will enable the description
	 * for the answer been selected for a question
	 * @returns {undefined}
	 */
	updateQuestionDescription: function(){
		var questionContainer = $("#"+this.model.questionId);
		$("#info_"+this.model.questionId, questionContainer).show();
	},

	/**
	 * disableRadios will disable radio buttons for
	 * the question once an answer is selected
	 * @returns {undefined}
	 */
	disableRadios: function(){
		var $el = $(this.el);
		$("input[name='"+this.model.questionId+"'", $el).prop("disabled", true).checkboxradio("refresh");
	},

	/**
	 * updateAnswerInModel will mark the users response
	 * true if answered correctly false if not
	 * @param  {boolean} userResponse user response
	 * @param {string} selectedAnswer user selected answer
	 * @returns {undefined}
	 */
	updateAnswerInModel: function(userResponse, selectedAnswer){
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
			$("#info_"+questionId, $el).show();
		}
	}
});