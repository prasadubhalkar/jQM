this["AppTmplts"] = this["AppTmplts"] || {};

this["AppTmplts"]["src/html/partials/answer.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<input type=\"radio\" name=\""
    + alias4(((helper = (helper = helpers.questionId || (depth0 != null ? depth0.questionId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"questionId","hash":{},"data":data}) : helper)))
    + "\" id=\""
    + alias4(((helper = (helper = helpers.answerId || (depth0 != null ? depth0.answerId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"answerId","hash":{},"data":data}) : helper)))
    + "\" class=\"answer\">\r\n"
    + alias4(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper)));
},"useData":true});

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

this["AppTmplts"]["src/html/partials/page.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div data-role=\"header\" data-theme=\"b\">\r\n    <a href=\"#myPanel\" data-icon=\"bars\" data-iconpos=\"notext\"> Menu </a>\r\n    <h1>"
    + alias4(((helper = (helper = helpers.pageTitle || (depth0 != null ? depth0.pageTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pageTitle","hash":{},"data":data}) : helper)))
    + " (<span id=\"pageScore_"
    + alias4(((helper = (helper = helpers.pageNumber || (depth0 != null ? depth0.pageNumber : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pageNumber","hash":{},"data":data}) : helper)))
    + "\"> "
    + alias4(((helper = (helper = helpers.currentScore || (depth0 != null ? depth0.currentScore : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currentScore","hash":{},"data":data}) : helper)))
    + " </span>)</h1>\r\n    <a id=\"resetQuiz\" data-icon=\"refresh\" data-iconpos=\"notext\"> Reset </a>\r\n</div>\r\n\r\n<div data-role=\"content\">\r\n    <div id=\"questions_"
    + alias4(((helper = (helper = helpers.pageNumber || (depth0 != null ? depth0.pageNumber : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pageNumber","hash":{},"data":data}) : helper)))
    + "\">\r\n    </div>\r\n</div>";
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

this["AppTmplts"]["src/html/partials/question.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "<div data-role=\"collapsible\" data-collapsed=\"true\" data-inset=\"true\" data-theme=\"b\" data-content-theme=\"a\">\r\n	<h3>"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</h3>\r\n	<div id=\"answers_"
    + alias2(alias1((depth0 != null ? depth0.questionId : depth0), depth0))
    + "\">\r\n	</div>\r\n</div>";
},"useData":true});