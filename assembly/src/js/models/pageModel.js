/* global Backbone, QuestionModel, _, QuestionsCollection, AppEvents*/
/* exported PageModel */
var PageModel = Backbone.Model.extend({
	/**
	 * initialize will initialize the Page model
	 * with default setting
	 * @returns {undefined}
	 */
	initialize: function(){
	},

	/**
	 * setUpPageData will setup the page data
	 * from the page contents
	 * @param {object} data page contents
	 * @returns {undefined}
	 */
	setUpPageData: function(data){
		//set the question collection instance
		this.questionsCollection = new QuestionsCollection();
		this.currentScore = 0;
		this.pageIndex = data.pageName;
		this.index = data.pageIndex;
		this.title = data.contents.title;
		this.setQuestions(data.contents.questions);	
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
			question.pageIndex = self.pageIndex;
			questionModel = new QuestionModel();
			questionModel.setUpQuestionData(question);
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
			this.trigger("scoreUpdated", this.pageIndex);
			AppEvents.trigger("someEvent", [this.index, this.currentScore]);
		}
	},

	/**
	 * getQuestions will return the list of questions
	 * for the page
	 * @returns {object} list of questions for the page
	 */
	getQuestions: function(){
		return this.questionsCollection.getQuestions();
	},

	/**
	 * resetModel reset the model data for page
	 * @returns {undefined}
	 */
	resetModel: function(){
		var questions = this.getQuestions();
		_.each(questions, function(question){
			question.resetQuestion();
        });
        this.currentScore = 0;
		this.trigger("scoreUpdated");
	}
});