/* global Backbone, $, AppTmplts, PanelView, PageModel */
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
        var questionsList = this.model.getQuestions();
        var model = this.model;

        $(this.el).html(this.template({
            pageTitle: model.title,
            navigationLabel: "Questions",
            questions: questionsList
        }));
        
        return this;
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