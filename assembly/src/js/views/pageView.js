/* global Backbone, $, AppTmplts, PanelView, QuestionView, _ */
/* exported PageView */
var PageView = Backbone.View.extend({
    //define default template for the view
    template:AppTmplts["src/html/partials/page.hbs"],
    //bind the view level events
    events: {
        "click a#resetQuiz": "resetQuiz"
    },

    /**
     * initialize set initial parameters for the Page View
     * @returns {undefined}
     */
    initialize: function() {
        //initialize page view here
    },

    /**
     * setModel will set the page model data
     * @param {object} pageModel actual page data
     * @returns {undefined}
     */
    setModel: function(pageModel){
        this.model = pageModel;
        this.model.bind("scoreUpdated", this.updateScore, this);
    },

    /**
     * render will append the actual handlebar template
     * in form of html to the backbone view
     * @returns {object} backbone view
     */
    render:function () {
        var model = this.model;
        $(this.el).html(this.template({
            pageTitle: model.title,
            pageNumber: model.pageNumber,
            currentScore: model.currentScore
        }));

        this.renderQuestions();
        
        return this;
    },

    /**
     * renderQuestions will initiate the render
     * questions view
     * @returns {string} html string for questions
     */
    renderQuestions: function(){
        var model = this.model;
        var $el = $(this.el);
        var questionsPlaceHolder = $("#questions_"+model.pageNumber, $el);
        var questions = model.getQuestions();
        var questionView = null;
        _.each(questions, function(question){
            questionView = new QuestionView(question);
            questionsPlaceHolder.append(questionView.el);
        });

        return questionsPlaceHolder;
    },

    /**
     * appendMenu will append the menu panel to each page
     * @returns {undefined}
     */
    appendMenu: function(){
        var panelView = new PanelView();
        panelView.render();
        $(this.el).append($(panelView.el));
    },

    /**
     * resetQuiz will reset the form in all
     * and remove all checked, disabled and
     * correct and wrong answers markings
     * @returns {undefined}
     */
    resetQuiz: function(){
        var $el = $(this.el);
        //get the current questions container
        var $questionContainer = $("#questions_"+this.model.pageNumber , $el);

        //reset all the wrong answers marking
        $(".wrong-answer", $questionContainer).removeClass("wrong-answer");

        //reset all the correct answers marking
        $(".correct-answer", $questionContainer).removeClass("correct-answer");

        $("input[type='radio']", $questionContainer).checkboxradio();

        $("input[type='radio']", $questionContainer).prop("disabled", false).checkboxradio("refresh");

        //reset all the radio buttons uncheck and enable again
        $("input[type='radio']", $questionContainer).prop("checked", false).checkboxradio("refresh");

        this.model.resetModel();
    },

    /**
     * updateScore will update the score on the view
     * @returns {undefined}
     */
    updateScore: function(){
        var $el = $(this.el);
        var $pageScore = $("#pageScore_"+this.model.pageNumber , $el);
        $pageScore.html(this.model.currentScore);
    }
});