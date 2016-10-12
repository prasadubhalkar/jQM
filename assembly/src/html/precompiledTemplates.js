this["AppTmplts"] = this["AppTmplts"] || {};

this["AppTmplts"]["src/html/partials/home.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "		<h3>"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</h3>\r\n    	<p>"
    + alias2(alias1((depth0 != null ? depth0.details : depth0), depth0))
    + "</p>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<div data-role=\"header\" data-theme=\"b\">\r\n	<a href=\"#myPanel\" data-icon=\"bars\" data-iconpos=\"notext\"> Menu </a>\r\n    <h1 data-position=\"right\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\r\n</div>\r\n<div data-role=\"content\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.topics : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});

this["AppTmplts"]["src/html/partials/page.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "    		<div data-role=\"collapsible\" data-collapsed=\"true\">\r\n    			<h3>"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</h3>\r\n                <p>"
    + alias2(alias1((depth0 != null ? depth0.description : depth0), depth0))
    + "</p>\r\n                <ul>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.details : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </ul>\r\n    		</div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "                        <li>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div data-role=\"header\" data-theme=\"b\">\r\n    <a href=\"#myPanel\" data-icon=\"bars\" data-iconpos=\"notext\"> Menu </a>\r\n    <h1>"
    + alias4(((helper = (helper = helpers.pageTitle || (depth0 != null ? depth0.pageTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pageTitle","hash":{},"data":data}) : helper)))
    + "</h1>\r\n</div>\r\n\r\n<div data-role=\"content\">\r\n    <h3>"
    + alias4(((helper = (helper = helpers.navigationLabel || (depth0 != null ? depth0.navigationLabel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"navigationLabel","hash":{},"data":data}) : helper)))
    + "</h3>\r\n    <div data-role=\"collapsible-set\" data-inset=\"true\" data-theme=\"b\" data-content-theme=\"a\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.topics : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</div>";
},"useData":true});

this["AppTmplts"]["src/html/partials/panel.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.pageIndex : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "			<li><a href=\"#page/"
    + alias2(alias1((depth0 != null ? depth0.pageIndex : depth0), depth0))
    + "\" data-rel=\"close\"> "
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + " </a></li>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "			<li><a href=\"#\" data-rel=\"close\"> "
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.title : depth0), depth0))
    + " </a></li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul data-role=\"listview\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.menuItems : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\r\n";
},"useData":true});