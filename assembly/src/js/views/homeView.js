/* global Backbone, $, AppTmplts, PanelView, HomeModel */
/* exported HomeView */
var HomeView = Backbone.View.extend({
    //default template for the view
    template: AppTmplts["src/html/partials/home.hbs"],

    /**
     * initialize set initial parameters for the Home View
     * @returns {undefined}
     */
    initialize: function() {
        this.model = new HomeModel();
    },
    
    /**
     * render create the home page view from the
     * handlebar template and append to backbone view
     * @returns {object} backbone view
     */
    render:function () {
        $(this.el).html(this.template({
            title: this.model.introModel.title,
            topics: this.model.introModel.topics
        }));
        this.appendPanel();
        return this;
    },

    /**
     * appendPanel append the panel to the view
     * @returns {undefined}
     */
    appendPanel: function(){
        var panelView = new PanelView();
        panelView.render();
        $(this.el).append($(panelView.el));
    }
});