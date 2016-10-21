/* global Backbone, $, AppTmplts, PanelView, PageModel, QuestionView, _ */
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
     * @param  {number} pageIndex index of the page
     * @returns {undefined}
     */
    initialize: function(pageIndex) {
        this.pageIndex = pageIndex;
        this.model = new PageModel({
            "pageIndex": pageIndex
        });
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
            pageNumber: model.get("pageIndex"),
            currentScore: model.get("currentScore")
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
        var questionsPlaceHolder = $("#questions_"+this.pageIndex, $el);
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
        var $questionContainer = $("#questions_"+this.pageIndex , $el);

        //reset all the wrong answers marking
        $(".wrong-answer", $questionContainer).removeClass("wrong-answer");

        //reset all the correct answers marking
        $(".correct-answer", $questionContainer).removeClass("correct-answer");

        //reset all the radio buttons uncheck and enable again
        $("input[type='radio']", $questionContainer).prop("checked", false).prop("disabled", false).checkboxradio("refresh");
    },

    /**
     * updateScore will update the score on the view
     * @returns {undefined}
     */
    updateScore: function(){
        var $el = $(this.el);
        var $pageScore = $("#pageScore_"+this.pageIndex , $el);
        $pageScore.html(this.model.currentScore);
    }
});