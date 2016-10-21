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
			title: model.get("title"),
			questionId: model.get("questionId")
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
		var choices = model.get("answers");
		var questionId = model.get("questionId");
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
		var correctAnswerId = model.get("correctanswerId");

		//if selected answer is correct answer
		if(event.target.id === correctAnswerId) {
			siblingLabel.addClass("correct-answer");
			this.markUsersAnswer(true);
		}
		//else if answer is not correct answer
		else {
			siblingLabel.addClass("wrong-answer");
			this.markUsersAnswer(false);
		}
		this.disableRadios(questionId);
	},

	/**
	 * markUsersAnswer will mark the users response
	 * true if answered correctly false if not
	 * @param  {boolean} userResponse user response
	 * @returns {undefined}
	 */
	markUsersAnswer: function(userResponse){
		this.model.markUserResponse(userResponse);
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