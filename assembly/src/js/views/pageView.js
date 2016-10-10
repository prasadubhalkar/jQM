/* global Backbone, $, AppTmplts, PanelView, PageModel */
/* exported PageView */
var PageView = Backbone.View.extend({
    template:AppTmplts["src/html/partials/page.hbs"],
    initialize: function(pageIndex) {
        this.pageIndex = pageIndex;
        this.model = new PageModel(pageIndex);
    },

    render:function () {
        $(this.el).html(this.template({
            pageTitle: this.model.page.title,
            navigationLabel: "Topics",
            topics: this.model.page.topics
        }));
        return this;
    },

    appendMenu: function(){
        var panelView = new PanelView();
        panelView.render();
        $(this.el).append($(panelView.el));
    }
});