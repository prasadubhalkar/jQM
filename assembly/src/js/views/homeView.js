/* global Backbone, $, AppTmplts, PanelView */
/* exported HomeView */
var HomeView = Backbone.View.extend({
    template: AppTmplts["src/html/partials/home.hbs"],
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

    appendPanel: function(){
        var panelView = new PanelView();
        panelView.render();
        $(this.el).append($(panelView.el));
    }
});