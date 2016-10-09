var Page1View = Backbone.View.extend({
    template:AppTmplts["src/html/partials/page1.hbs"],
    render:function () {
        $(this.el).html(this.template({
            back: "Back",
            page1: "Page 1",
            page1Text: "This is Page 1. It was created dynamically using an underscore.js template.",
            navigationLabel: "Navigate to:",
            home: "Home",
            page2: "Page 2"    
        }));
        return this;
    }
});