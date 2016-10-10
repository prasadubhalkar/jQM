/* global Backbone, $, HomeView, PageView */

/**
 * Define backbone router as we override the original jQM routing
 * @returns {undefined}
 */
var AppRouter = Backbone.Router.extend({
    routes:{
        "":"home",
        "page/:pageNumber":"page"
    },

    /**
     * initialize will set the default page and
     * set the back button operation
     * @returns {undefined}
     */
    initialize:function () {
        // Handle back button throughout the application
        $(".back").live("click", function() {
            window.history.back();
            return false;
        });
        this.firstPage = true;
    },

    /**
     * home will set the navigate action to home page
     * @returns {undefined}
     */
    home:function () {
        this.changePage(new HomeView());
    },

    /**
     * page will set the navigate action to page1
     * @param {number} pageIndex index of the page where we want to traverse
     * @returns {undefined}
     */
    page: function (pageIndex) {
        this.changePage(new PageView(pageIndex), pageIndex);
    },

    /**
     * changePage will handle the action to change the state of page
     * and what is main view for android application
     * @param  {object} page backbone page element
     * @returns {undefined}
     */
    changePage:function (page, pageIndex) {
        var transition = $.mobile.defaultPageTransition;

        $(page.el).attr("data-role", "page");
        
        //call the render funcation for backbone view
        page.render();

        //if page is any other than home append panel
        if(pageIndex){
            page.appendMenu();
        }
        
        //append page to body creating a complete view for mobile application
        $("body").append($(page.el));

        // We don't want to slide the first page
        if (this.firstPage) {
            transition = "none";
            this.firstPage = false;
        }

        $.mobile.changePage($(page.el), {
            changeHash: false,
            transition: transition
        });
    }
});

/**
 * When document is ready create a router instance and start
 * the backbone application
 * @returns {undefined}
 */
$(document).ready(function () {
    new AppRouter();
    Backbone.history.start();
});
