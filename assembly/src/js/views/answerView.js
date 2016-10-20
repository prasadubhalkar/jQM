/* global Backbone, AppTmplts, $ */
/* exported AnswerView */
var AnswerView = Backbone.View.extend({
    tagName: "label",
    //define default template for the view
    template: AppTmplts["src/html/partials/answer.hbs"],
    /**
     * initialize set initial parameters for the Page View
     * @param  {object} answer object for question choice
     * @param {string} questionId unique identifier for question
     * @returns {undefined}
     */
    initialize: function(answer, questionId) {
        this.answer = answer;
        this.questionId = questionId;
        this.render();
    },

    /**
     * render will draw the answer html by filling
     * in the blanks for the answer handlebar template
     * @param  {object} answer answer object
     * @param  {string} questionId current question id
     * @returns {object} backbone element object
     */
    render: function(){
        var $el = $(this.el);
        $el.append(this.template({
            questionId: this.questionId,
            answerId: this.answer.answerId,
            label: this.answer.label
        }));
        return this;
    }
});