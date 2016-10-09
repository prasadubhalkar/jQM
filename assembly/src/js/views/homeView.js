var HomeView = Backbone.View.extend({
    template: AppTmplts["src/html/partials/home.hbs"],
    render:function () {
        $(this.el).html(this.template({
            title: "Backbone.js + jQuery Mobile",
            subTitle: "Application Template for using Backbone.js and jQuery Mobile.",
            navigationLabel: "Navigate to:",
            page1: "Page 1",
            page2: "Page 2"
        }));
        return this;
    }
});