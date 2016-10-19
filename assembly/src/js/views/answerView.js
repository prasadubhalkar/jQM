/* global Backbone, AppTmplts */
/* exported AnswerView */
var AnswerView = Backbone.View.extend({
    //define default template for the view
    template:AppTmplts["src/html/partials/answer.hbs"],
    /**
     * initialize set initial parameters for the Page View
     * @param  {number} pageIndex index of the page
     * @returns {undefined}
     */
    initialize: function() {
    }
});