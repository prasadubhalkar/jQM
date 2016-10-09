this["AppTmplts"] = this["AppTmplts"] || {};

this["AppTmplts"]["src/html/partials/home.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div data-role=\"header\">\r\n    <h1>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\r\n</div>\r\n<div data-role=\"content\">\r\n    <h3>"
    + alias4(((helper = (helper = helpers.subTitle || (depth0 != null ? depth0.subTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subTitle","hash":{},"data":data}) : helper)))
    + "</h3>\r\n    <p>"
    + alias4(((helper = (helper = helpers.navigationLabel || (depth0 != null ? depth0.navigationLabel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"navigationLabel","hash":{},"data":data}) : helper)))
    + "</p>\r\n    <ul data-role=\"listview\"  data-inset=\"true\">\r\n        <li><a href=\"#page1\">"
    + alias4(((helper = (helper = helpers.page1 || (depth0 != null ? depth0.page1 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page1","hash":{},"data":data}) : helper)))
    + "</a></li>\r\n        <li><a href=\"#page2\">"
    + alias4(((helper = (helper = helpers.page2 || (depth0 != null ? depth0.page2 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page2","hash":{},"data":data}) : helper)))
    + "</a></li>\r\n    </ul>\r\n</div>";
},"useData":true});

this["AppTmplts"]["src/html/partials/page1.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div data-role=\"header\">\r\n    <a href=\"#\" data-icon=\"back\" class=\"back ui-btn-left\">"
    + alias4(((helper = (helper = helpers.back || (depth0 != null ? depth0.back : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"back","hash":{},"data":data}) : helper)))
    + "</a>\r\n    <h1>"
    + alias4(((helper = (helper = helpers.page1 || (depth0 != null ? depth0.page1 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page1","hash":{},"data":data}) : helper)))
    + "</h1>\r\n</div>\r\n\r\n<div data-role=\"content\">\r\n    <p>"
    + alias4(((helper = (helper = helpers.page1Text || (depth0 != null ? depth0.page1Text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page1Text","hash":{},"data":data}) : helper)))
    + "</p>\r\n    <p>"
    + alias4(((helper = (helper = helpers.navigationLabel || (depth0 != null ? depth0.navigationLabel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"navigationLabel","hash":{},"data":data}) : helper)))
    + "</p>\r\n    <ul data-role=\"listview\" data-inset=\"true\">\r\n        <li><a href=\"#\">"
    + alias4(((helper = (helper = helpers.home || (depth0 != null ? depth0.home : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"home","hash":{},"data":data}) : helper)))
    + "</a></li>\r\n        <li><a href=\"#page2\">"
    + alias4(((helper = (helper = helpers.page2 || (depth0 != null ? depth0.page2 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page2","hash":{},"data":data}) : helper)))
    + "</a></li>\r\n    </ul>\r\n</div>";
},"useData":true});

this["AppTmplts"]["src/html/partials/page2.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div data-role=\"header\">\r\n    <a href=\"#\" data-icon=\"back\" class=\"back ui-btn-left\">"
    + alias4(((helper = (helper = helpers.back || (depth0 != null ? depth0.back : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"back","hash":{},"data":data}) : helper)))
    + "</a>\r\n    <h1>"
    + alias4(((helper = (helper = helpers.page2 || (depth0 != null ? depth0.page2 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page2","hash":{},"data":data}) : helper)))
    + "</h1>\r\n</div>\r\n\r\n<div data-role=\"content\">\r\n    <p>"
    + alias4(((helper = (helper = helpers.page2Text || (depth0 != null ? depth0.page2Text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page2Text","hash":{},"data":data}) : helper)))
    + "</p>\r\n    <p>"
    + alias4(((helper = (helper = helpers.navigationLabel || (depth0 != null ? depth0.navigationLabel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"navigationLabel","hash":{},"data":data}) : helper)))
    + "</p>\r\n    <ul data-role=\"listview\" data-inset=\"true\">\r\n        <li><a href=\"#\">"
    + alias4(((helper = (helper = helpers.home || (depth0 != null ? depth0.home : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"home","hash":{},"data":data}) : helper)))
    + "</a></li>\r\n        <li><a href=\"#page1\">"
    + alias4(((helper = (helper = helpers.page1 || (depth0 != null ? depth0.page1 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page1","hash":{},"data":data}) : helper)))
    + "</a></li>\r\n    </ul>\r\n</div>";
},"useData":true});