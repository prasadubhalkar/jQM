/* global Backbone, $, HomeView, PageView, PagesCollection, PageModel, pages */

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
        pagesCollection.initCollection();
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
        var pages = pagesCollection.getCollection();
        var pageNumber = "page"+pageIndex;
        var pageModel = pages.getPage(pageNumber);
        var pageView = new PageView();
        if(!pageModel){
            pageModel = pagesCollection.createPage(pageNumber);
            pagesCollection.addPage(pageModel);
        }
        pageView.setModel(pageModel);
        this.changePage(pageView, pageIndex);
    },

    /**
     * changePage will handle the action to change the state of page
     * and what is main view for android application
     * @param  {object} page backbone page element
     * @param {number} pageIndex is the page index for the selected page
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
 * pagesCollection is an interface to communicate with
 * pagesCollection
 * @returns {object} accesiable public interface object
 */
var pagesCollection = (function(){
    var pagesCollection = null;
    /**
     * createPagesCollection will initiate
     * the pages collection
     * @returns {object} pagesCollection collection of pages
     */
    function createPagesCollection(){
        pagesCollection = new PagesCollection();
        return pagesCollection;
    }

    /**
     * fetchExistingPage will return particular
     * page based on page index
     * @param  {string} pageIndex unique identifier for page
     * @returns {object} page model object found in collection
     */
    function fetchExistingPage(pageIndex){
        return pagesCollection.getPage(pageIndex);
    }

    /**
     * getPagesCollection will return the
     * pages collection
     * @returns {object} pagesCollection a collection of pages
     */
    function getPagesCollection(){
        return pagesCollection;
    }

    /**
     * createSinglePage will create a single page
     * @param  {string} pageIndex page index for page
     * @returns {undefined}
     */
    function createSinglePage(pageIndex){
        var pageContents = pages[pageIndex];
        var pageModel = new PageModel(page);
        var page = {
            index: pageIndex,
            contents: pageContents
        };
        pageModel.setUpPageData(page);
        return pageModel;
    }

    /**
     * addPageToCollection will push the page model
     * to the pages collection
     * @param {object} pageModel page model
     * @returns {undefined}
     */
    function addPageToCollection(pageModel){
        pagesCollection.add(pageModel);
    }

    return {
        initCollection: createPagesCollection,
        getPage: fetchExistingPage,
        getCollection: getPagesCollection,
        addPage: addPageToCollection,
        createPage: createSinglePage
    }
})();

/**
 * When document is ready create a router instance and start
 * the backbone application
 * @returns {undefined}
 */
$(document).ready(function () {
    new AppRouter();
    Backbone.history.start();
});
