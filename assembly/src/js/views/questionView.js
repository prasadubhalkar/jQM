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
		this.question = question;
		this.render();
	},

	/**
	 * render will initiate the render
	 * process for the view
	 * @returns {object} backbone view object
	 */
	render: function(){
		var $el = $(this.el);
		
		$el.append(this.template({
			title: this.question.title,
			questionId: this.question.questionId
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
		var choices = this.question.answers;
		var questionId = this.question.questionId;
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
		if(event.target.id === this.question.correctanswerId){
			$(event.target).siblings("label").addClass("correct-answer");
			this.resetClass($(event.target).siblings("label"), "correct-answer");
		}
		else {
			$(event.target).siblings("label").addClass("wrong-answer");
			this.resetClass($(event.target).siblings("label"), "wrong-answer");
		}
    },

    /**
     * resetClass will reset the correct and wrong answer
     * class after 500 milliseconds
     * @param  {object} element jQuery element
     * @param  {string} className CSS class to remove
     * @returns {undefined}
     */
    resetClass: function(element, className){
    	setTimeout(function(){
			element.removeClass(className);
		}, 500);	
    }
});