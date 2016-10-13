/* exported indexItems, pages, homeIntro */

var homeIntro = {
	title: "jQuery Quiz",
	topics: [
		{
			title: "jQuery Core",
			started: false,
			completed: false,
			score: 0,
			questions: 10
		},
		{
			title: "Events",
			started: false,
			completed: false,
			score: 0,
			questions: 10
		},
		{
			title: "Effects",
			started: false,
			completed: false,
			score: 0,
			questions: 10
		},
		{
			title: "Ajax",
			started: false,
			completed: false,
			score: 0,
			questions: 10
		},
		{
			title: "Plugins",
			started: false,
			completed: false,
			score: 0,
			questions: 10	
		},
		{
			title: "Performance",
			started: false,
			completed: false,
			score: 0,
			questions: 10	
		},
		{
			title: "Code Organization",
			started: false,
			completed: false,
			score: 0,
			questions: 10	
		},
		{
			title: "jQuery UI",
			started: false,
			completed: false,
			score: 0,
			questions: 10	
		},
		{
			title: "jQuery Mobile",
			started: false,
			completed: false,
			score: 0,
			questions: 10	
		}
	]
}
/**
 * Is the list of menu items
 */
var indexItems = [
	{
		title: "Home",
		pageIndex: 0
	},
	{
		title: "jQuery Core",
		pageIndex: 1
	},
	{
		title: "Events",
		pageIndex: 2
	},
	{
		title: "Effects",
		pageIndex: 3
	},
	{
		title: "Ajax",
		pageIndex: 4
	},
	{
		title: "Plugins",
		pageIndex: 5
	},
	{
		title: "Performance",
		pageIndex: 6
	},
	{
		title: "Code Organization",
		pageIndex: 7
	},
	{
		title: "jQuery UI",
		pageIndex: 8
	},
	{
		title: "jQuery Mobile",
		pageIndex: 9
	}
];

/**
 * Will hold titles for each topic under the page and its details
 */
var pages = {
	page1: {
		title: "jQuery Core",
		questions: [
			{
				title: "What is difference between jQuery object methods and core jQuery methods?",
				type: "single",
				questionId: "t1q1",
				correctAnswerId: "q1a2", 
				description: [
					"Methods called on jQuery selections are in the $.fn namespace, and automatically receive and return the selection as this.",
					"Methods in the $ namespace are generally utility-type methods, and do not work with selections; they are not automatically passed any arguments, and their return value will vary."
				],
				answers: [
					{
						label: "There is no difference",
						answerId: "q1a1"
					},
					{
						label: "jQuery object methods work with selections, where as core jQuery methods are generally utility-type methods, and do not work with selections",
						answerId: "q1a2"
					},
					{
						label: "Core jQuery methods will generally receive and return 'this'",
						answerId: "q1a3"
					},
					{
						label: "jQuery object methods are not automatically passed any arguments",
						answerId: "q1a4"
					}
				]
			},
			{
				title: "Which of this statement is correct?",
				type: "single",
				questionId: "t1q2",
				correctAnswerId: "q2a1", 
				description: [
					"$( document ).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute.",
					"Code included inside $( window ).load(function() { ... }) will run once the entire page (images or iframes), not just the DOM, is ready."
				],
				answers: [
					{
						label: "Code inside $(document).ready() will run before DOM is ready",
						answerId: "q2a1"
					},
					{
						label: "$( document ).ready() and $( window ).load(function() { ... }) are both the same",
						answerId: "q2a2"
					},
					{
						label: "Code in $( document ).ready() will run once DOM is ready, but before entire page contents are ready",
						answerId: "q2a3"
					},
					{
						label: "Page can be manipulated safely before $(document).ready() event is fired",
						answerId: "q2a4"
					}
				]
			},
			{
				title: "What does jQuery no-conflict means?",
				type: "single",
				questionId: "t1q3",
				correctAnswerId: "q3a2",
				description: [
					"By default, jQuery uses $ as a shortcut for jQuery. Thus, if you are using another JavaScript library that uses the $ variable, you can run into conflicts with jQuery",
					"In order to avoid these conflicts, you need to put jQuery in no-conflict mode immediately after it is loaded onto the page and before you attempt to use jQuery in your page"
				],
				answers: [
					{
						label: "jQuery with $ alias won't load until all other libraries are loaded to avoid conflicts manipulating DOM",
						answerId: "q3a1"
					},
					{
						label: "When you put jQuery into no-conflict mode, you have the option of assigning a new variable name to replace the $ alias",
						answerId: "q3a2"
					},
					{
						label: "jQuery indicates that it as loaded without any conflicts in a normal way with $ alias",
						answerId: "q3a3"
					},
					{
						label: "None of the above",
						answerId: "q3a4"
					}
				]
			},
			{
				title: "With no-conflicts, how do you avoid defining another alternative to the full jQuery?",
				type: "single",
				questionId: "t1q4",
				correctAnswerId: "q4a3",
				description: [
					"if you don't want to define another alternative to the full jQuery function name",
					"simply add the $ as an argument passed to your jQuery( document ).ready() function",
					"This is most frequently used in the case where you still want the benefits of really concise jQuery code, but don't want to cause conflicts with other libraries",
					"Use (function($) { //use $ as jQuery })(jQuery);"
				],
				answers: [
					{
						label: "Invoke windows.load function with $ alias",
						answerId: "q4a1"
					},
					{
						label: "Invoke document.ready function with $ alias",
						answerId: "q4a2"
					},
					{
						label: "Call jQuery.noConflict() and pass in $ as an argument to immediately invoked function block",
						answerId: "q4a3"
					},
					{
						label: "Invoke windows.ready function with $ alias",
						answerId: "q4a4"
					}
				]
			},
			{
				title: "The attr method can be used as both getter and setter",
				type: "single",
				questionId: "t1q5",
				correctAnswerId: "q5a1",
				description: [
					"The .attr() method acts as both a getter and a setter. As a setter, .attr() can accept either a key and a value, or an object containing one or more key/value pairs."
				],
				answers: [
					{
						label: "True",
						answerId: "q5a1"
					},
					{
						label: "False",
						answerId: "q5a2"
					}
				]
			},
			{
				title: "What is correct way to use jQuery selector to find element by CSS class",
				type: "single",
				questionId: "t1q6",
				correctAnswerId: "q6a2",
				description: [
					"The most basic concept of jQuery is to select some elements and do something with them.",
					"jQuery supports most CSS3 selectors, as well as some non-standard selectors."
				],
				answers: [
					{
						label: "$('#myElement')",
						answerId: "q6a1"
					},
					{
						label: "$('.myElement)",
						answerId: "q6a2"
					},
					{
						label: "$('$myElement)",
						answerId: "q6a3"
					},
					{
						label: "$('_myElement)",
						answerId: "q6a4"
					},
				]
			},
			{
				title: "What is correct way to use jQuery selector to find element by its ID",
				type: "single",
				questionId: "t1q7",
				correctAnswerId: "q7a1",
				description: [
					"The most basic concept of jQuery is to select some elements and do something with them.",
					"jQuery supports most CSS3 selectors, as well as some non-standard selectors."
				],
				answers: [
					{
						label: "$('#myElement')",
						answerId: "q6a1"
					},
					{
						label: "$('.myElement')",
						answerId: "q6a2"
					},
					{
						label: "$('$myElement')",
						answerId: "q6a3"
					},
					{
						label: "$('_myElement')",
						answerId: "q6a4"
					},
				]
			},
			{
				title: "What is syntax for selecting element by custom attribute",
				type: "single",
				questionId: "t1q8",
				correctAnswerId: "q8a2",
				description: [
					"The most basic concept of jQuery is to select some elements and do something with them.",
					"jQuery supports most CSS3 selectors, as well as some non-standard selectors."
				],
				answers: [
					{
						label: "$('[name=\"customName\"]')",
						answerId: "q8a1"
					},
					{
						label: "$('input[name=\"customName\"]')",
						answerId: "q8a2"
					},
					{
						label: "$('#[\"customName\"]')",
						answerId: "q8a3"
					},
					{
						label: "$('input.[\"customName\"])",
						answerId: "q8a4"
					},
				]
			},
			{
				title: "What does $(div p) means?",
				type: "single",
				questionId: "t1q9",
				correctAnswerId: "q9a1",
				description: [
					"The element element selector is used to select elements inside elements."
				],
				answers: [
					{
						label: "Selects all <p> elements inside <div> elements",
						answerId: "q9a1"
					},
					{
						label: "Selects all <div> elements inside <p> elements",
						answerId: "q9a2"
					},
					{
						label: "Selects all <div> elements",
						answerId: "q9a3"
					},
					{
						label: "Selects all <div> elements",
						answerId: "q9a4"
					},
				]
			},
			{
				title: "What does $(div + p) means?",
				type: "single",
				questionId: "t1q10",
				correctAnswerId: "q10a3",
				description: [
					"The element element selector is used to select elements inside elements."
				],
				answers: [
					{
						label: "Selects all <p> elements that are placed immediately before <div> elements",
						answerId: "q10a1"
					},
					{
						label: "Selects all <p> elements those are inside <div> elements",
						answerId: "q10a2"
					},
					{
						label: "Selects all <p> elements that are placed immediately after <div> elements",
						answerId: "q10a3"
					},
					{
						label: "Selects all <div> elements that are placed immediately after <p> elements",
						answerId: "q10a4"
					},
				]
			}
		]
	},
	page2: {
		title: "Creating High-Quality Code",
		topics: [
			{
				title: "Design in Construction",
				details: [ "Details to Come" ]
			},
			{
				title: "Working Classes",
				details: [ "Details to Come" ]
			},
			{
				title: "High-Quality Routines",
				details: [ "Details to Come" ]
			},
			{
				title: "Defensive Programming",
				details: [ "Details to Come" ]
			},
			{
				title: "The Pseudocode Programming Process",
				details: [ "Details to Come" ]
			}
		]
	},
	page3: {
		title: "Variables",
		topics: [
			{
				title: "General Issues in Using Variables",
				details: [ "Details to Come" ]
			},
			{
				title: "The Power of Variable Names",
				details: [ "Details to Come" ]
			},
			{
				title: "Fundamental Data Types",
				details: [ "Details to Come" ]
			},
			{
				title: "Unusual Data Types",
				details: [ "Details to Come" ]
			}
		]
	},
	page4: {
		title: "Statements",
		topics: [
			{
				title: "Organizing Straight-Line Code",
				details: [ "Details to Come" ]
			},
			{
				title: "Using Conditionals",
				details: [ "Details to Come" ]
			},
			{
				title: "Controlling Loops",
				details: [ "Details to Come" ]
			},
			{
				title: "Unusual Control Structures",
				details: [ "Details to Come" ]
			},
			{
				title: "Table-Driven Methods",
				details: [ "Details to Come" ]
			},
			{
				title: "General Control Issues",
				details: [ "Details to Come" ]
			}
		]
	},
	page5: {
		title: "Code Improvements",
		topics: [
			{
				title: "The Software-Quality Landscape",
				details: [ "Details to Come" ]
			},
			{
				title: "Collaborative Construction",
				details: [ "Details to Come" ]
			},
			{
				title: "Developer Testing",
				details: [ "Details to Come" ]
			},	
			{
				title: "Debugging",
				details: [ "Details to Come" ]
			},
			{
				title: "Refactoring",
				details: [ "Details to Come" ]
			},
			{
				title: "Code-Tuning Strategies",
				details: [ "Details to Come" ]
			},
			{
				title: "Code-Tuning Techniques",
				details: [ "Details to Come" ]
			}
		]
	},
	page6: {
		title: "System Considerations",
		topics: [
			{
				title: "How Program Size Affects Construction",
				details: [ "Details to Come" ]
			},
			{
				title: "Managing Construction",
				details: [ "Details to Come" ]
			},
			{
				title: "Integration",
				details: [ "Details to Come" ]
			},	
			{
				title: "Programming Tools",
				details: [ "Details to Come" ]
			}
		]
	},
	page7: {
		title: "Software Craftsmanship",
		topics: [
			{
				title: "Layout and Style",
				details: [ "Details to Come" ]
			},
			{
				title: "Self-Documenting Code",
				details: [ "Details to Come" ]
			},
			{
				title: "Personal Character",
				details: [ "Details to Come" ]
			},	
			{
				title: "Themes in Software Craftsmanship",
				details: [ "Details to Come" ]
			}
		]
	}
}