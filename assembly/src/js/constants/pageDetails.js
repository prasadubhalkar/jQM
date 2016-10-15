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
				correctanswerId: "t1q1a2", 
				description: [
					"Methods called on jQuery selections are in the $.fn namespace, and automatically receive and return the selection as this.",
					"Methods in the $ namespace are generally utility-type methods, and do not work with selections; they are not automatically passed any arguments, and their return value will vary."
				],
				answers: [
					{
						label: "There is no difference",
						answerId: "t1q1a1"
					},
					{
						label: "jQuery object methods work with selections, where as core jQuery methods do not work with selections",
						answerId: "t1q1a2"
					},
					{
						label: "Core jQuery methods will generally receive and return 'this'",
						answerId: "t1q1a3"
					},
					{
						label: "jQuery object methods are not automatically passed any arguments",
						answerId: "t1q1a4"
					}
				]
			},
			{
				title: "Which of this statement is correct?",
				type: "single",
				questionId: "t1q2",
				correctanswerId: "t1q2a1", 
				description: [
					"$( document ).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute.",
					"Code included inside $( window ).load(function() { ... }) will run once the entire page (images or iframes), not just the DOM, is ready."
				],
				answers: [
					{
						label: "Code inside $(document).ready() will run before DOM is ready",
						answerId: "t1q2a1"
					},
					{
						label: "$( document ).ready() and $( window ).load(function() { ... }) are both the same",
						answerId: "t1q2a2"
					},
					{
						label: "Code in $( document ).ready() will run once DOM is ready, but before entire page contents are ready",
						answerId: "t1q2a3"
					},
					{
						label: "Page can be manipulated safely before $(document).ready() event is fired",
						answerId: "t1q2a4"
					}
				]
			},
			{
				title: "What does jQuery no-conflict means?",
				type: "single",
				questionId: "t1q3",
				correctanswerId: "t1q3a2",
				description: [
					"By default, jQuery uses $ as a shortcut for jQuery. Thus, if you are using another JavaScript library that uses the $ variable, you can run into conflicts with jQuery",
					"In order to avoid these conflicts, you need to put jQuery in no-conflict mode immediately after it is loaded onto the page and before you attempt to use jQuery in your page"
				],
				answers: [
					{
						label: "jQuery with $ alias won't load until all other libraries are loaded to avoid conflicts manipulating DOM",
						answerId: "t1q3a1"
					},
					{
						label: "When you put jQuery into no-conflict mode, you have the option of assigning a new variable name to replace the $ alias",
						answerId: "t1q3a2"
					},
					{
						label: "jQuery indicates that it has loaded without any conflicts in a normal way with $ alias",
						answerId: "t1q3a3"
					},
					{
						label: "None of the above",
						answerId: "t1q3a4"
					}
				]
			},
			{
				title: "With no-conflicts, how do you avoid defining another alternative to the full jQuery?",
				type: "single",
				questionId: "t1q4",
				correctanswerId: "t1q4a3",
				description: [
					"if you don't want to define another alternative to the full jQuery function name",
					"simply add the $ as an argument passed to your jQuery( document ).ready() function",
					"This is most frequently used in the case where you still want the benefits of really concise jQuery code, but don't want to cause conflicts with other libraries",
					"Use (function($) { //use $ as jQuery })(jQuery);"
				],
				answers: [
					{
						label: "Invoke windows.load function with $ alias",
						answerId: "t1q4a1"
					},
					{
						label: "Invoke document.ready function with $ alias",
						answerId: "t1q4a2"
					},
					{
						label: "Call jQuery.noConflict() and pass $ as an argument to immediately invoked function block",
						answerId: "t1q4a3"
					},
					{
						label: "Invoke windows.ready function with $ alias",
						answerId: "t1q4a4"
					}
				]
			},
			{
				title: "The attr method can be used as both getter and setter",
				type: "single",
				questionId: "t1q5",
				correctanswerId: "t1q5a1",
				description: [
					"The .attr() method acts as both a getter and a setter. As a setter, .attr() can accept either a key and a value, or an object containing one or more key/value pairs."
				],
				answers: [
					{
						label: "True",
						answerId: "t1q5a1"
					},
					{
						label: "False",
						answerId: "t1q5a2"
					}
				]
			},
			{
				title: "What is correct way to use jQuery selector to find element by CSS class",
				type: "single",
				questionId: "t1q6",
				correctanswerId: "t1q6a2",
				description: [
					"The most basic concept of jQuery is to select some elements and do something with them.",
					"jQuery supports most CSS3 selectors, as well as some non-standard selectors."
				],
				answers: [
					{
						label: "$('#myElement')",
						answerId: "t1q6a1"
					},
					{
						label: "$('.myElement')",
						answerId: "t1q6a2"
					},
					{
						label: "$('$myElement')",
						answerId: "t1q6a3"
					},
					{
						label: "$('_myElement')",
						answerId: "t1q6a4"
					},
				]
			},
			{
				title: "What is correct way to use jQuery selector to find element by its ID",
				type: "single",
				questionId: "t1q7",
				correctanswerId: "t1q7a1",
				description: [
					"The most basic concept of jQuery is to select some elements and do something with them.",
					"jQuery supports most CSS3 selectors, as well as some non-standard selectors."
				],
				answers: [
					{
						label: "$('#myElement')",
						answerId: "t1q6a1"
					},
					{
						label: "$('.myElement')",
						answerId: "t1q6a2"
					},
					{
						label: "$('$myElement')",
						answerId: "t1q6a3"
					},
					{
						label: "$('_myElement')",
						answerId: "t1q6a4"
					},
				]
			},
			{
				title: "What is syntax for selecting element by custom attribute",
				type: "single",
				questionId: "t1q8",
				correctanswerId: "t1q8a2",
				description: [
					"The most basic concept of jQuery is to select some elements and do something with them.",
					"jQuery supports most CSS3 selectors, as well as some non-standard selectors."
				],
				answers: [
					{
						label: "$('[name=\"customName\"]')",
						answerId: "t1q8a1"
					},
					{
						label: "$('input[name=\"customName\"]')",
						answerId: "t1q8a2"
					},
					{
						label: "$('#[\"customName\"]')",
						answerId: "t1q8a3"
					},
					{
						label: "$('input.[\"customName\"]')",
						answerId: "t1q8a4"
					},
				]
			},
			{
				title: "What does $(div p) means?",
				type: "single",
				questionId: "t1q9",
				correctanswerId: "t1q9a1",
				description: [
					"The element element selector is used to select elements inside elements."
				],
				answers: [
					{
						label: "Selects all <p> elements inside <div> elements",
						answerId: "t1q9a1"
					},
					{
						label: "Selects all <div> elements inside <p> elements",
						answerId: "t1q9a2"
					},
					{
						label: "Selects all <div> elements",
						answerId: "t1q9a3"
					},
					{
						label: "Selects all <p> elements",
						answerId: "t1q9a4"
					},
				]
			},
			{
				title: "What does $(div + p) means?",
				type: "single",
				questionId: "t1q10",
				correctanswerId: "t1q10a3",
				description: [
					"The element element selector is used to select elements inside elements."
				],
				answers: [
					{
						label: "Selects all <p> elements that are placed immediately before <div> elements",
						answerId: "t1q10a1"
					},
					{
						label: "Selects all <p> elements those are inside <div> elements",
						answerId: "t1q10a2"
					},
					{
						label: "Selects all <p> elements that are placed immediately after <div> elements",
						answerId: "t1q10a3"
					},
					{
						label: "Selects all <div> elements that are placed immediately after <p> elements",
						answerId: "t1q10a4"
					},
				]
			},
			{
				title: "Which of this is not a pseudo selector?",
				type: "single",
				questionId: "t1q11",
				correctanswerId: "t1q11a4",
				description: [
					"Following are the pseudo selectors provider by jQuery",
					":password, :reset, :radio, :text, :submit, :checkbox, :button, :image, :file"
				],
				answers: [
					{
						label: ":reset",
						answerId: "t1q11a1"
					},
					{
						label: ":submit",
						answerId: "t1q11a2"
					},
					{
						label: ":password",
						answerId: "t1q11a3"
					},
					{
						label: ":cancel",
						answerId: "t1q11a4"
					},
				]
			}
		]
	},
	page2: {
		title: "Events",
		questions: [
			{
				title: "Which of this statement is false for '.on()' method?",
				type: "single",
				questionId: "t2q1",
				correctanswerId: "t2q1a2", 
				description: [
					"Methods called on jQuery selections are in the $.fn namespace, and automatically receive and return the selection as this.",
					"Methods in the $ namespace are generally utility-type methods, and do not work with selections; they are not automatically passed any arguments, and their return value will vary."
				],
				answers: [
					{
						label: "The on method is useful for binding the same handler function to multiple events",
						answerId: "t2q1a1"
					},
					{
						label: ".on() can only create event listeners on elements that exist at the time you set up the listeners",
						answerId: "t2q1a2"
					},
					{
						label: ".on() can bind event listeners to elements that are added before and after listener's been set up, without delegation",
						answerId: "t2q1a3"
					},
					{
						label: "None of the above",
						answerId: "t2q1a4"
					}
				]
			},
			{
				title: "What is the correct syntax for create event delegation for every anchor tag under a #list element",
				type: "single",
				questionId: "t2q2",
				correctanswerId: "t2q2a4", 
				description: [
					"$('#list a' ).on( 'click', function( event ) will directly bind event to anchor tag",
					"$('#list' ).on( 'click', 'a', function( event ) will bind event to list element and delegate propagated events to anchor tag"
				],
				answers: [
					{
						label: "$('#list a' ).on( 'click', function( event )",
						answerId: "t2q2a1"
					},
					{
						label: "$( 'a' ).on( 'click', function( event )",
						answerId: "t2q2a2"
					},
					{
						label: "$( 'a' ).on( 'click', '#list' function( event )",
						answerId: "t2q2a3"
					},
					{
						label: "$('#list' ).on( 'click', 'a', function( event )",
						answerId: "t2q2a4"
					}
				]
			},
			{
				title: "How to get the keyboard key input for event is triggered",
				type: "single",
				questionId: "t2q3",
				correctanswerId: "t2q3a1", 
				description: [
					"The event.which property normalizes event.keyCode and event.charCode.",
					"It is recommended to watch event.which for keyboard key input"
				],
				answers: [
					{
						label: "event.which",
						answerId: "t2q3a1"
					},
					{
						label: "event.target",
						answerId: "t2q3a2"
					},
					{
						label: "event.key",
						answerId: "t2q3a3"
					},
					{
						label: "event.charCode",
						answerId: "t2q3a4"
					}
				]
			},
			{
				title: "What is syntax to bind same event handler to multiple events to a 'input' element",
				type: "single",
				questionId: "t2q4",
				correctanswerId: "t2q4a3", 
				description: [
					"If multiple events are to share the same handling function,",
					" you can provide the event types as a space-separated list to .on()"
				],
				answers: [
					{
						label: "$( 'input' ).on( 'click' ).( 'change' ).function()",
						answerId: "t2q4a1"
					},
					{
						label: "$( 'input', 'click on' ).on(function())",
						answerId: "t2q4a2"
					},
					{
						label: "$( 'input' ).on( 'click change' , function()) ",
						answerId: "t2q4a3"
					},
					{
						label: "$( 'input' ).on('click', 'change', function())",
						answerId: "t2q4a4"
					}
				]
			},
			{
				title: "Which function is used to remove an event listener",
				type: "single",
				questionId: "t2q5",
				correctanswerId: "t2q5a1", 
				description: [
					"To remove an event listener, you use the .off() method and pass in the event type to off",
					" If you attached a named function to the event, then you can isolate the event tear down to just that named function by passing it as the second argument."
				],
				answers: [
					{
						label: "off",
						answerId: "t2q5a1"
					},
					{
						label: "remove",
						answerId: "t2q5a2"
					},
					{
						label: "clear",
						answerId: "t2q5a3"
					},
					{
						label: "detach",
						answerId: "t2q5a4"
					}
				]
			},
			{
				title: "How do you bind event handler only one time to a element?",
				type: "single",
				questionId: "t2q6",
				correctanswerId: "t2q6a3", 
				description: [
					" jQuery provides the .one() method to run a particular handler to run only once",
					" after that, you may want no handler to run, or you may want a different handler to run"
				],
				answers: [
					{
						label: ".once()",
						answerId: "t2q6a1"
					},
					{
						label: ".single()",
						answerId: "t2q6a2"
					},
					{
						label: ".one()",
						answerId: "t2q6a3"
					},
					{
						label: "None of the above",
						answerId: "t2q6a4"
					}
				]
			},
			{
				title: "How to handle right click on an element in jQuery",
				type: "single",
				questionId: "t2q7",
				correctanswerId: "t2q7a1", 
				description: [
					" The contextmenu event is sent to an element when the right button of the mouse is clicked on it,",
					" but before the context menu is displayed"
				],
				answers: [
					{
						label: ".contextmenu()",
						answerId: "t2q7a1"
					},
					{
						label: ".menu()",
						answerId: "t2q7a2"
					},
					{
						label: ".rightClick()",
						answerId: "t2q7a3"
					},
					{
						label: "None of the above",
						answerId: "t2q7a4"
					}
				]
			},
			{
				title: "How do you pass custom data to event?",
				type: "single",
				questionId: "t2q8",
				correctanswerId: "t2q8a4", 
				description: [
					" You can pass your own data to the event object.",
					" $( 'p' ).on( 'click', { foo: 'bar' }, function( event ) { //event.data.foo; }"
				],
				answers: [
					{
						label: "$( 'p' ).on( 'click', 'foo: bar' ), function( event )",
						answerId: "t2q8a1"
					},
					{
						label: "$( 'p' ).on( 'click' ), function( event, dataObject )",
						answerId: "t2q8a2"
					},
					{
						label: "$( 'p click' ).on( { foo: 'bar' } ), function( event )",
						answerId: "t2q8a3"
					},
					{
						label: "$( 'p' ).on( 'click', { foo: 'bar' }, function( event )",
						answerId: "t2q8a4"
					}
				]
			},
			{
				title: "Which event object properties to use to fecth mouse position at the time the event occurred?",
				type: "single",
				questionId: "t2q9",
				correctanswerId: "t2q9a2", 
				description: [
					" pageX, pageY : The mouse position at the time the event occurred, relative to the top left of the page."
				],
				answers: [
					{
						label: "X, Y",
						answerId: "t2q9a1"
					},
					{
						label: "pageX, pageY",
						answerId: "t2q9a2"
					},
					{
						label: "coordinates",
						answerId: "t2q9a3"
					},
					{
						label: "None of the above",
						answerId: "t2q9a4"
					}
				]
			},
			{
				title: "What is this statement is true about triggerHandler?",
				type: "single",
				questionId: "t2q10",
				correctanswerId: "t2q10a4", 
				description: [
					" pageX, pageY : The mouse position at the time the event occurred, relative to the top left of the page."
				],
				answers: [
					{
						label: ".triggerHandler() can be chained, as it returns jQuery object",
						answerId: "t2q10a1"
					},
					{
						label: "Events triggered by .triggerHandler(), will bubble up the DOM hierarchy",
						answerId: "t2q10a2"
					},
					{
						label: ".triggerHandler() will cause the default behavior of the event",
						answerId: "t2q10a3"
					},
					{
						label: ".triggerHandler() only triggers the event on the first element of a jQuery object",
						answerId: "t2q10a4"
					}
				]
			}
		]
	},
	page3: {
		title: "Effects",
		questions: [
			{
				title: "Which property is set by jQuery when hide() function is called?",
				type: "single",
				questionId: "t3q1",
				correctanswerId: "t3q1a3", 
				description: [
					"When jQuery hides an element, it sets its CSS display property to none",
					"This means the content will have zero width and height; it does not mean that the content will simply become transparent and leave an empty area on the page"
				],
				answers: [
					{
						label: "visibility:hidden",
						answerId: "t3q1a1"
					},
					{
						label: "visibility:none",
						answerId: "t3q1a2"
					},
					{
						label: "display:none",
						answerId: "t3q1a3"
					},
					{
						label: "display:hidden",
						answerId: "t3q1a4"
					}
				]
			},
			{
				title: "Which of this is not correct argument for show/hide jQuery functions?",
				type: "single",
				questionId: "t3q2",
				correctanswerId: "t3q2a4", 
				description: [
					"You can tell .show() and .hide() to use animation in a couple of ways",
					"One is to pass in an argument of 'slow', 'normal', or 'fast'"
				],
				answers: [
					{
						label: "slow",
						answerId: "t3q2a1"
					},
					{
						label: "fast",
						answerId: "t3q2a2"
					},
					{
						label: "normal",
						answerId: "t3q2a3"
					},
					{
						label: "None of the above",
						answerId: "t3q2a4"
					}
				]
			},
			{
				title: ".show() and .hide() uses combination of which two animation effects?",
				type: "single",
				questionId: "t3q3",
				correctanswerId: "t3q3a2", 
				description: [
					".show() and .hide() use a combination of slide and fade effects when showing and hiding content in an animated way"
				],
				answers: [
					{
						label: "flip and fade",
						answerId: "t3q3a1"
					},
					{
						label: "slide and fade",
						answerId: "t3q3a2"
					},
					{
						label: "roll and fade",
						answerId: "t3q3a3"
					},
					{
						label: "None of the above",
						answerId: "t3q3a4"
					}
				]
			},
			{
				title: ".slideIn() and .slideOut() show and hide content, respectively, using only a slide effect?",
				type: "single",
				questionId: "t3q4",
				correctanswerId: "t3q4a2", 
				description: [
					".slideDown() and .slideUp() show and hide content, respectively, using only a slide effect",
					".fadeIn() and .fadeOut() show and hide content, respectively, by means of a fade animation"

				],
				answers: [
					{
						label: "True",
						answerId: "t3q4a1"
					},
					{
						label: "False",
						answerId: "t3q4a2"
					}
				]
			},
			{
				title: "jQuery can let you change a content's visibility based on its current visibility state using?",
				type: "single",
				questionId: "t3q5",
				correctanswerId: "t3q5a3", 
				description: [
					".show() and .hide() use a combination of slide and fade effects when showing and hiding content in an animated way"
				],
				answers: [
					{
						label: "show()",
						answerId: "t3q5a1"
					},
					{
						label: "hide()",
						answerId: "t3q5a2"
					},
					{
						label: "toggle()",
						answerId: "t3q5a3"
					},
					{
						label: "fadeInOut()",
						answerId: "t3q5a4"
					}
				]
			},
			{
				title: "Which of this is correct way of doing something after animation completes?",
				type: "single",
				questionId: "t3q6",
				correctanswerId: "t3q6a2", 
				description: [
					"It is important to realize that .fadeIn() above only kicks off the animation",
					"Once started, the animation is implemented by rapidly changing CSS properties in a JavaScript setInterval() loop",
					"When you call .fadeIn(), it starts the animation loop and then returns the jQuery object, passing it along to .addClass()",
					"which will then add the colorRed style class while the animation loop is just getting started."
				],
				answers: [
					{
						label: "$( 'div.hidden' ).fadeIn( 750 ).addClass( 'colorRed' );",
						answerId: "t3q6a1"
					},
					{
						label: "$( 'div.hidden' ).fadeIn( 750, function() { $( this ).addClass( 'colorRed' ); } )",
						answerId: "t3q6a2"
					},
					{
						label: "$( 'div.hidden' ).fadeIn( 750 ).on( 'addClass', colorRed' );",
						answerId: "t3q6a3"
					},
					{
						label: "$( 'div.hidden' ).fadeIn( 750 ).done( 'addClass', colorRed' );",
						answerId: "t3q6a4"
					}
				]
			},
			{
				title: "How to select all the elements under a div for which animation is in progress?",
				type: "single",
				questionId: "t3q7",
				correctanswerId: "t3q7a1", 
				description: [
					"Select all elements that are in the progress of an animation at the time the selector is run.",
					"Note. If you use a custom jQuery build without the effects module, the :animated selector will throw an error."
				],
				answers: [
					{
						label: "$( 'div:animated' )",
						answerId: "t3q7a1"
					},
					{
						label: "$( 'div' ).animated",
						answerId: "t3q7a2"
					},
					{
						label: "$( 'div:animated' ).inProgress()",
						answerId: "t3q7a3"
					},
					{
						label: "All of the above",
						answerId: "t3q7a4"
					}
				]
			},
			{
				title: "Which function us used to stop inprogress animation?",
				type: "single",
				questionId: "t3q8",
				correctanswerId: "t3q8a2", 
				description: [
					".stop() will immediately terminate all animations running on the elements in your selection",
					"You might give end-users control over page animations by rigging a button they can click to stop the animations."
				],
				answers: [
					{
						label: ".terminate()",
						answerId: "t3q8a1"
					},
					{
						label: ".stop()",
						answerId: "t3q8a2"
					},
					{
						label: ".clear()",
						answerId: "t3q8a3"
					},
					{
						label: ".close()",
						answerId: "t3q8a4"
					}
				]
			},
			{
				title: "Which is correct syntax to introduce additional time with successive animations?",
				type: "single",
				questionId: "t3q9",
				correctanswerId: "t3q9a4", 
				description: [
					".delay() is used to introduce a delay between successive animations"
				],
				answers: [
					{
						label: ".hide( 500 ).add( 1500 ).show( 300 )",
						answerId: "t3q9a1"
					},
					{
						label: ".hide( 500 ).slow( 1500 ).show( 300 )",
						answerId: "t3q9a2"
					},
					{
						label: ".hide( 500, 1500 ).show( 300 )",
						answerId: "t3q9a3"
					},
					{
						label: ".hide( 500 ).delay( 1500 ).show( 300 )",
						answerId: "t3q9a4"
					}
				]
			},
			{
				title: "Which function will Stop the currently-running animation, remove all queued animations, and complete all animations for the matched elements?",
				type: "single",
				questionId: "t3q10",
				correctanswerId: "t3q10a1", 
				description: [
					"When .finish() is called on an element, the currently-running animation and all queued animations (if any) immediately stop and their CSS properties set to their target values.",
					"All queued animations are removed."
				],
				answers: [
					{
						label: ".finish()",
						answerId: "t3q10a1"
					},
					{
						label: ".stop()",
						answerId: "t3q10a2"
					},
					{
						label: ".terminate()",
						answerId: "t3q10a3"
					},
					{
						label: ".animate()",
						answerId: "t3q10a4"
					}
				]
			},
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