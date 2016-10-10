this["AppTmplts"] = this["AppTmplts"] || {};

this["AppTmplts"]["src/html/partials/home.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div data-role=\"header\">\r\n	<a href=\"#myPanel\" data-icon=\"bars\" data-iconpos=\"notext\"> Menu </a>\r\n    <h1 data-position=\"right\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\r\n</div>\r\n<div data-role=\"content\">\r\n    <h3>"
    + alias4(((helper = (helper = helpers.subTitle || (depth0 != null ? depth0.subTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subTitle","hash":{},"data":data}) : helper)))
    + "</h3>\r\n    <p>"
    + alias4(((helper = (helper = helpers.navigationLabel || (depth0 != null ? depth0.navigationLabel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"navigationLabel","hash":{},"data":data}) : helper)))
    + "</p>\r\n</div>";
},"useData":true});

this["AppTmplts"]["src/html/partials/page.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "        <li><a href=\"#\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.title : depth0), depth0))
    + "</a></li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div data-role=\"header\">\r\n    <a href=\"#myPanel\" data-icon=\"bars\" data-iconpos=\"notext\"> Menu </a>\r\n    <h1>"
    + alias4(((helper = (helper = helpers.pageTitle || (depth0 != null ? depth0.pageTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pageTitle","hash":{},"data":data}) : helper)))
    + "</h1>\r\n</div>\r\n\r\n<div data-role=\"content\">\r\n    <h3>"
    + alias4(((helper = (helper = helpers.navigationLabel || (depth0 != null ? depth0.navigationLabel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"navigationLabel","hash":{},"data":data}) : helper)))
    + "</h3>\r\n    <ul data-role=\"listview\" data-inset=\"true\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.topics : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\r\n</div>";
},"useData":true});

this["AppTmplts"]["src/html/partials/panel.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "		<li><a href=\"#page/"
    + alias2(alias1((depth0 != null ? depth0.pageIndex : depth0), depth0))
    + "\" data-rel=\"close\"> "
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + " </a></li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul data-role=\"listview\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.menuItems : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\r\n";
},"useData":true});