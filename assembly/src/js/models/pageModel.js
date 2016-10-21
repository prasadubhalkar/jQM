/* global Backbone, pages, QuestionModel, _, QuestionsCollection*/
/* exported PageModel */
var PageModel = Backbone.Model.extend({
	defaults: {
		questionsCollection: null,
		title: "",
		pageNumber: null,
		currentScore: 0
	},
	/**
	 * initialize will initialize the Page model
	 * with default setting
	 * @param  {number} data initial model data passed in to model
	 * @returns {undefined}
	 */
	initialize: function(data){
		var pageName = "page" + data.pageIndex;
		var pageContents = pages[pageName];

		//set the question collection instance
		this.questionsCollection = new QuestionsCollection();
		this.title = pageContents.title;
		this.currentScore = 0;
		this.pageNumber = data.pageIndex;
		this.setQuestions(pageContents.questions);
	},

	/**
	 * getPageTitle get the title for the page
	 * @returns {string} title of the page
	 */
	getPageTitle: function(){
		return this.title;
	},

	/**
	 * setQuestions will set the questions for the
	 * page under a collection
	 * @param {object} questions array of questions
	 * @returns {undefined}
	 */
	setQuestions: function(questions){
		var questionModel = null;
		var self = this;
		_.each(questions, function(question){
			question.pageNumber = this.pageNumber;
			questionModel = new QuestionModel(question);
			questionModel.parent = self;
			self.questionsCollection.add(questionModel);
		});
	},

	/**
	 * questionAnswered question is been answered
	 * @param {boolean} correctAnswer if the question is answered correctly
	 * @returns {undefined}
	 */
	questionAnswered: function(correctAnswer){
		if(correctAnswer) {
			this.currentScore += 1;
			this.trigger("scoreUpdated");
		}
	},

	/**
	 * getQuestions will return the list of questions
	 * for the page
	 * @returns {object} list of questions for the page
	 */
	getQuestions: function(){
		return this.questionsCollection.getQuestions();
	}
});