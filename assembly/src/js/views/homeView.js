/* global Backbone, $, AppTmplts, PanelView */
/* exported HomeView */
var HomeView = Backbone.View.extend({
    //default template for the view
    template: AppTmplts["src/html/partials/home.hbs"],
    
    /**
     * render create the home page view from the
     * handlebar template and append to backbone view
     * @returns {object} backbone view
     */
    render:function () {
        $(this.el).html(this.template({
            title: "Code Quality",
            subTitle: "This application will provide you some tricks to improve code quality",
            navigationLabel: "Navigate to:",
            page1: "Page 1",
            page2: "Page 2"
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