var Page2View = Backbone.View.extend({
    template:AppTmplts["src/html/partials/page2.hbs"],
    render:function () {
        $(this.el).html(this.template({
            back: "Back",
            page2: "Page 2",
            page2Text: "This is Page 2. It was created dynamically using an underscore.js template.",
            navigationLabel: "Navigate to:",
            page1: "Page 1",
            home: "Home"
        }));
        return this;
    }
});