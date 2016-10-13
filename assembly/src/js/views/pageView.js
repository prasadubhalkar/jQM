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
        this.model = new PageModel(pageIndex);
    },

    /**
     * render will append the actual handlebar template
     * in form of html to the backbone view
     * @returns {object} backbone view
     */
    render:function () {
        $(this.el).html(this.template({
            pageTitle: this.model.page.title,
            navigationLabel: "Questions",
            questions: this.model.page.questions
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