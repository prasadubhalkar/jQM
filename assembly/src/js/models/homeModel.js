/* global Backbone, homeIntro, AppEvents*/
/* exported HomeModel */
var HomeModel = Backbone.Model.extend({
	/**
	 * initialize will initialize the Page model
	 * with default setting
	 * @returns {undefined}
	 */
	initialize: function(){
		var self = this;
		this.introModel = homeIntro;
		AppEvents.bind("someEvent", function(score){
            self.updatePageScore(score[0], score[1]);
        });
	},

	/**
     * updatePageScore will update the home model
     * score for a page
     * @param  {[type]} pageIndex [description]
     * @param  {[type]} score     [description]
     * @return {[type]}           [description]
     */
    updatePageScore: function(pageIndex, score){
        var nPageIndex = parseInt(pageIndex);
        this.introModel.topics[nPageIndex - 1].score = score;
    },
});