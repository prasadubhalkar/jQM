/* global Backbone, $, AppTmplts, PanelModel */
/* exported PanelView */
var PanelView = Backbone.View.extend({
	//default tag for the view
	tagName: "div",
	//parent/wrapper element id for the template
	id: "myPanel",
	//handlebar template for the view
    template: AppTmplts["src/html/partials/panel.hbs"],

    /**
     * initialize will set the model for the view
     * @returns {undefined}
     */
    initialize: function(){
		this.model = new PanelModel();
    },

    /**
     * setupElementAttributes will setup default element
     * attributes
     * @returns {undefined}
     */
    setupElementAttributes: function(){
    	$(this.el).attr("data-role", "panel");
		$(this.el).attr("data-display", "overlay");
		$(this.el).attr("data-position", "left");
		$(this.el).attr("data-swipe-close", "true");
    },

    /**
     * render will render the element and setup panel
     * attributes
     * @returns {object} backbone element for the panel view
     */
    render:function () {
		this.setupElementAttributes();
		
		$(this.el).html(this.template({
			menuItems: this.model.index
		}));

        return this;
    }
});