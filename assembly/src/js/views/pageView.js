/* global Backbone, $, AppTmplts, PanelView, PageModel, QuestionView, _ */
/* exported PageView */
var PageView = Backbone.View.extend({
    //define default template for the view
    template:AppTmplts["src/html/partials/page.hbs"],
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
            pageNumber: this.pageIndex
        }));

        this.renderQuestions();
        
        return this;
    },

    renderQuestions: function(){
        var model = this.model;
        var $el = $(this.el);
        var questionsPlaceHolder = $("#questios_"+this.pageIndex, $el);
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
    }
});