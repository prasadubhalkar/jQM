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
				title: "Which event object properties to use to fetch mouse position at the time the event occurred?",
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
				title: "Which of this statement is not true about triggerHandler?",
				type: "single",
				questionId: "t2q10",
				correctanswerId: "t2q10a4", 
				description: [
					" .triggerHandler( eventType ) executes all handlers bound with jQuery for the event type.",
					"It will also execute any method called on{eventType}() found on the element. "
				],
				answers: [
					{
						label: "The .triggerHandler( 'event' ) method will not call .event() on the element it is triggered on",
						answerId: "t2q10a1"
					},
					{
						label: "While .trigger() will operate on all elements matched by the jQuery object, .triggerHandler() only affects the first matched element.",
						answerId: "t2q10a2"
					},
					{
						label: ".triggerHandler() returns the jQuery object (to allow chaining), .triggerHandler() returns whatever value was returned by the last handler",
						answerId: "t2q10a3"
					},
					{
						label: "Events triggered with .triggerHandler() will bubble up the DOM hierarchy; and are handled by the target element directly",
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
				title: "jQuery can let you change the content's visibility based on its current visibility status in DOM using?",
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
		title: "Ajax",
		questions: [
			{
				title: "cache option for $.ajax is true for all request types except?",
				type: "single",
				questionId: "t4q1",
				correctanswerId: "t4q1a3", 
				description: [
					"Whether to use a cached response if available. Defaults to true for all dataTypes except 'script' and 'jsonp'.", 
					"When set to false, the URL will simply have a cachebusting parameter appended to it."
				],
				answers: [
					{
						label: "PUT and POST",
						answerId: "t4q1a1"
					},
					{
						label: "DELETE and POST",
						answerId: "t4q1a2"
					},
					{
						label: "SCRIPT and JSONP",
						answerId: "t4q1a3"
					},
					{
						label: "SCRIPT and POST",
						answerId: "t4q1a4"
					}
				]
			},
			{
				title: "Which function is guaranteed to run when request is complete, regardless of success or failure?",
				type: "single",
				questionId: "t4q2",
				correctanswerId: "t4q2a2", 
				description: [
					"A callback function to run when the request is complete, regardless of success or failure.", 
					"The function receives the raw request object and the text status of the request."
				],
				answers: [
					{
						label: "done",
						answerId: "t4q2a1"
					},
					{
						label: "always",
						answerId: "t4q2a2"
					},
					{
						label: "finally",
						answerId: "t4q2a3"
					},
					{
						label: "None of the above",
						answerId: "t4q2a4"
					}
				]
			},
			{
				title: "What is the default contentType for ajax requests?",
				type: "single",
				questionId: "t4q3",
				correctanswerId: "t4q3a4", 
				description: [
					"A callback function to run when the request is complete, regardless of success or failure.", 
					"The function receives the raw request object and the text status of the request."
				],
				answers: [
					{
						label: "multipart/form-data",
						answerId: "t4q3a1"
					},
					{
						label: "text/plain",
						answerId: "t4q3a2"
					},
					{
						label: "application/json",
						answerId: "t4q3a3"
					},
					{
						label: "application/x-www-form-urlencoded; charset=UTF-8",
						answerId: "t4q3a4"
					}
				]
			},
			{
				title: "What is the 'context' option in $.ajax used for?",
				type: "single",
				questionId: "t4q4",
				correctanswerId: "t4q4a1", 
				description: [
					"The scope in which the callback function(s) should run (i.e. what this will mean inside the callback function(s)).", 
					"By default, this inside the callback function(s) refers to the object originally passed to $.ajax()."
				],
				answers: [
					{
						label: "The scope in which the callback function(s) should run",
						answerId: "t4q4a1"
					},
					{
						label: "Specify the execution context for request",
						answerId: "t4q4a2"
					},
					{
						label: "Specifying sever context where the request should be executed",
						answerId: "t4q4a3"
					},
					{
						label: "None of the above",
						answerId: "t4q4a4"
					}
				]
			},
			{
				title: "What is difference between serialize and serializeArray?",
				type: "single",
				questionId: "t4q5",
				correctanswerId: "t4q5a2", 
				description: [
					"The .serialize() method serializes a form's data into a query string", 
					".serializeArray() method is similar to the .serialize(), except it produces an array of objects"
				],
				answers: [
					{
						label: "They are both the same",
						answerId: "t4q5a1"
					},
					{
						label: ".serialize() method serializes a form's data into a query string, and .serializeArray() in an Array",
						answerId: "t4q5a2"
					},
					{
						label: ".serialize() method serializes a form's data into a JSON object, and .serializeArray() in an Array",
						answerId: "t4q5a3"
					},
					{
						label: ".serialize() method serializes a form's data into a string, and .serializeArray() in an JSON object",
						answerId: "t4q5a4"
					}
				]
			},
			{
				title: "What is ifModified param under $.ajax?",
				type: "single",
				questionId: "t4q6",
				correctanswerId: "t4q6a3", 
				description: [
					"Allow the request to be successful only if the response has changed since the last request", 
					"This is done by checking the Last-Modified header."
				],
				answers: [
					{
						label: "Verify if the query string is modified from last request, and allow the request to be successful",
						answerId: "t4q6a1"
					},
					{
						label: "Verify if the form data is modified from last request, and allow the request to be successful",
						answerId: "t4q6a2"
					},
					{
						label: "Verify if the response has changed since the last request, and allow the request to be successful",
						answerId: "t4q6a3"
					},
					{
						label: "None of the above",
						answerId: "t4q6a4"
					}
				]
			},
			{
				title: "Set the 'global' param false to prevent the global handlers like ajaxStart or ajaxStop from being triggered",
				type: "single",
				questionId: "t4q7",
				correctanswerId: "t4q7a1", 
				description: [
					"Whether to trigger global Ajax event handlers for this request.", 
					"The default is true. Set to false to prevent the global handlers like ajaxStart or ajaxStop from being triggered.",
					"This can be used to control various Ajax Events."
				],
				answers: [
					{
						label: "True",
						answerId: "t4q7a1"
					},
					{
						label: "False",
						answerId: "t4q7a2"
					}
				]
			},
			{
				title: "What is ajaxPrefilter used for?",
				type: "single",
				questionId: "t4q8",
				correctanswerId: "t4q8a4", 
				description: [
					"A prefilter is a way to modify the ajax options before each request is sent", 
					"You can pass in an optional argument before the callback function that specifies which dataTypes you'd like the prefilter to be applied to."
				],
				answers: [
					{
						label: "A prefilter is a way to modify the query string options before each request is sent",
						answerId: "t4q8a1"
					},
					{
						label: "A prefilter is a way to modify the contentType options before each request is sent",
						answerId: "t4q8a2"
					},
					{
						label: "A prefilter is a way to modify the dataType options before each request is sent",
						answerId: "t4q8a3"
					},
					{
						label: "A prefilter is a way to modify the ajax options before each request is sent",
						answerId: "t4q8a4"
					}
				]
			},
			{
				title: "What is jsonpCallback used for?",
				type: "single",
				questionId: "t4q9",
				correctanswerId: "t4q9a2", 
				description: [
					"Specify the callback function name for a JSONP request.",
					"This value will be used instead of the random name automatically generated by jQuery."
				],
				answers: [
					{
						label: "To make CORS requests",
						answerId: "t4q9a1"
					},
					{
						label: "To make JSONP requests",
						answerId: "t4q9a2"
					},
					{
						label: "To set the name of JSONP callback",
						answerId: "t4q9a3"
					},
					{
						label: "None of the above",
						answerId: "t4q9a4"
					}
				]
			},
			{
				title: "Which of this is not an jQuery ajax event?",
				type: "single",
				questionId: "t4q10",
				correctanswerId: "t4q10a1", 
				description: [
					".ajaxComplete(): Register a handler to be called when Ajax requests complete.",
					".ajaxError(): Register a handler to be called when Ajax requests complete with an error.",
					".ajaxSend(): Attach a function to be executed before an Ajax request is sent.",
					".ajaxStart(): Register a handler to be called when the first Ajax request begins.",
					".ajaxStop(): Register a handler to be called when all Ajax requests have completed.",
					".ajaxSuccess(): Attach a function to be executed whenever an Ajax request completes successfully."
				],
				answers: [
					{
						label: "ajaxFinish",
						answerId: "t4q10a1"
					},
					{
						label: "ajaxComplete",
						answerId: "t4q10a2"
					},
					{
						label: "ajaxError",
						answerId: "t4q10a3"
					},
					{
						label: "ajaxSuccess",
						answerId: "t4q10a4"
					}
				]
			}
		]
	},
	page5: {
		title: "Plugins",
		questions: [
			{
				title: "To make a method available just like any other jQuery object method add it to?",
				type: "single",
				questionId: "t5q1",
				correctanswerId: "t5q1a2", 
				description: [
					"To create a plugin, all we have to do is add a function", 
					"to $.fn and it will be available just like any other jQuery object method"
				],
				answers: [
					{
						label: "$",
						answerId: "t5q1a1"
					},
					{
						label: "$.fn",
						answerId: "t5q1a2"
					},
					{
						label: "jQuery",
						answerId: "t5q1a3"
					},
					{
						label: "$()",
						answerId: "t5q1a4"
					}
				]
			},
			{
				title: "What is correct way to make plugin method chainable?",
				type: "single",
				questionId: "t5q2",
				correctanswerId: "t5q2a1", 
				description: [
					"Chainable accomplished by having all jQuery object methods return the original jQuery object again", 
					"Making plugin method chainable takes one line of code 'return this;'"
				],
				answers: [
					{
						label: "use 'return this;' from plugin method",
						answerId: "t5q2a1"
					},
					{
						label: "use 'return $(this);' from plugin method",
						answerId: "t5q2a2"
					},
					{
						label: "use 'return $.fn' from plugin method",
						answerId: "t5q2a3"
					},
					{
						label: "use 'return jQuery();' from plugin method",
						answerId: "t5q2a4"
					}
				]
			},
			{
				title: "How to make jQuery plugin $ alias safe in case of no-conflict mode?",
				type: "single",
				questionId: "t5q3",
				correctanswerId: "t5q3a3", 
				description: [
					"To work well with other plugins, and still use the jQuery $ alias, we need to put all of our code inside of an Immediately Invoked Function Expression", 
					"and then pass the function jQuery, and name the parameter $"
				],
				answers: [
					{
						label: "We cannot make plugin $ alias safe in case of no-conflict mode",
						answerId: "t5q3a1"
					},
					{
						label: "All jQuery plugins are by default $ alias safe in case of no-conflict mode ",
						answerId: "t5q3a2"
					},
					{
						label: "Wrap plugin code inside Immediately Invoked Expression passing jQuery as argument",
						answerId: "t5q3a3"
					},
					{
						label: "None of the above",
						answerId: "t5q3a4"
					}
				]
			},
			{
				title: "What is correct syntax to specify default for a plugin?",
				type: "single",
				questionId: "t5q4",
				correctanswerId: "t5q4a1", 
				description: [
					"Plugin defaults – added as a property on our plugin function"
				],
				answers: [
					{
						label: "$.fn.pluginName.defaults.<<propertyName>>",
						answerId: "t5q4a1"
					},
					{
						label: "$.fn.pluginName.<<propertyName>",
						answerId: "t5q4a2"
					},
					{
						label: "$.fn.pluginName.properties.<<propertyName>",
						answerId: "t5q4a3"
					},
					{
						label: "None of the above",
						answerId: "t5q4a4"
					}
				]
			},
			{
				title: "In jQuery UI the system that manages state, allows multiple functions to be exposed via a single plugin, and provides various extension points is called?",
				type: "single",
				questionId: "t5q5",
				correctanswerId: "t5q5a1", 
				description: [
					"The system is called the Widget Factory and is exposed as jQuery.widget as part of jQuery UI 1.8; however, it can be used independently of jQuery UI"
				],
				answers: [
					{
						label: "Widget Factory",
						answerId: "t5q5a1"
					},
					{
						label: "Plugin Factory",
						answerId: "t5q5a2"
					},
					{
						label: "Addon Factory",
						answerId: "t5q5a3"
					},
					{
						label: "State Factory",
						answerId: "t5q5a4"
					}
				]
			},
			{
				title: "How is jQuery.widget different from jQuery.plugin?",
				type: "single",
				questionId: "t5q6",
				correctanswerId: "t5q6a1", 
				description: [
					"When the plugin gets called, it will create a new plugin instance and all functions will be executed within the context of that instance.",
					"This is different from a standard jQuery plugin in two important ways. First, the context is an object, not a DOM element. Second, the context is always a single object, never a collection."
				],
				answers: [
					{
						label: "In jQuery.widget context is always collection of DOM element",
						answerId: "t5q6a1"
					},
					{
						label: "In jQuery.widget the context is an function",
						answerId: "t5q6a2"
					},
					{
						label: "In jQuery.widget the context is a single object, not DOM element",
						answerId: "t5q6a3"
					},
					{
						label: "None of the above",
						answerId: "t5q6a4"
					}
				]
			},
			{
				title: "Which statement true for jQuery.widget plugin name?",
				type: "single",
				questionId: "t5q7",
				correctanswerId: "t5q7a1", 
				description: [
					"The name of the plugin must contain a namespace; in this case we've used the nmk namespace.",
					"There is a limitation that namespaces be exactly one level deep – that is, we can't use a namespace like nmk.foo."
				],
				answers: [
					{
						label: "The name of the plugin must contain a namespace; namespaces be exactly one level deep",
						answerId: "t5q7a1"
					},
					{
						label: "The name of the plugin can contain optional namespace; namespaces be exactly one level deep",
						answerId: "t5q7a2"
					},
					{
						label: "There is no restriction on the name of the plugin",
						answerId: "t5q7a3"
					},
					{
						label: "The name of the plugin should not contain a namespace",
						answerId: "t5q7a4"
					}
				]
			},
			{
				title: "The 'ui' namespace is reserved for official jQuery UI plugins?",
				type: "single",
				questionId: "t5q8",
				correctanswerId: "t5q8a1", 
				description: [
					"The ui namespace is reserved for official jQuery UI plugins. When building your own plugins, you should create your own namespace.",
					"This makes it clear where the plugin came from and whether it is part of a larger collection."
				],
				answers: [
					{
						label: "True",
						answerId: "t5q8a1"
					},
					{
						label: "False",
						answerId: "t5q8a2"
					}
				]
			},
			{
				title: "Which method can be used to add callback in widget plugins?",
				type: "single",
				questionId: "t5q8",
				correctanswerId: "t5q8a3", 
				description: [
					"The _trigger method takes three parameters:",
					"the name of the callback, a native event object that initiated the callback, and a hash of data relevant to the event."
				],
				answers: [
					{
						label: "_callback",
						answerId: "t5q8a1"
					},
					{
						label: "_delegate",
						answerId: "t5q8a2"
					},
					{
						label: "_trigger",
						answerId: "t5q8a3"
					},
					{
						label: "None of the above",
						answerId: "t5q8a4"
					}
				]
			},
			{
				title: "When a plugin instance is created, it is stored on the original DOM element using jQuery.data, with the plugin's full name?",
				type: "single",
				questionId: "t5q9",
				correctanswerId: "t5q9a1", 
				description: [
					"When a plugin instance is created, it is stored on the original DOM element using jQuery.data, with the plugin's full name",
					"(the plugin's namespace, plus a hyphen, plus the plugin's name) as the key. For example the jQuery UI dialog widget uses a key of 'ui-dialog'"
				],
				answers: [
					{
						label: "True",
						answerId: "t5q9a1"
					},
					{
						label: "False",
						answerId: "t5q9a2"
					}
				]
			},
			{
				title: "How is plugin clean up handled in jQuery?",
				type: "single",
				questionId: "t5q10",
				correctanswerId: "t5q10a1", 
				description: [
					"The _destroy method is automatically called if the element that your plugin instance is tied to is removed",
					"from the DOM, so this can be used for garbage collection as well."
				],
				answers: [
					{
						label: "_destroy method is called on plugin when corresponding element is removed from DOM",
						answerId: "t5q10a1"
					},
					{
						label: "_destroy method is called on plugin when corresponding element is hidden in the DOM",
						answerId: "t5q10a2"
					},
					{
						label: "_destroy method must be called explicitly for garbage collection",
						answerId: "t5q10a3"
					},
					{
						label: "None of the above",
						answerId: "t5q10a4"
					}
				]
			}
		]
	},
	page6: {
		title: "Performance",
		questions: [
			{
				title: "Which of the statement is true about appending elements to DOM, to improve performance?",
				type: "single",
				questionId: "t6q1",
				correctanswerId: "t6q1a4", 
				description: [
					"Touching the DOM comes at a cost.  If you're appending a lot of elements to the DOM, you will want to append them all at once, ", 
					"rather than one at a time. This is a common problem when appending elements within a loop."
				],
				answers: [
					{
						label: "You will want to append them all at once, rather than one at a time",
						answerId: "t6q1a1"
					},
					{
						label: "During each iteration of the loop, you append the element to the fragment rather than the DOM element",
						answerId: "t6q1a2"
					},
					{
						label: "Build up a string during each iteration of the loop and just set the HTML of the DOM element to that string",
						answerId: "t6q1a3"
					},
					{
						label: "All of the above",
						answerId: "t6q1a4"
					}
				]
			},
			{
				title: "How can you improve loop performance?",
				type: "single",
				questionId: "t6q2",
				correctanswerId: "t6q2a2", 
				description: [
					"In a for loop, don't access the length property of an array every time; cache it beforehand."
				],
				answers: [
					{
						label: "Delcare index variable for loop beforehand",
						answerId: "t6q2a1"
					},
					{
						label: "Cache length property of an array beforehand",
						answerId: "t6q1a2"
					},
					{
						label: "Cache loop increament property beforehand",
						answerId: "t6q1a3"
					},
					{
						label: "Avoid using for loops",
						answerId: "t6q1a4"
					}
				]
			},
			{
				title: "What is detach() method used for?",
				type: "single",
				questionId: "t6q3",
				correctanswerId: "t6q3a1", 
				description: [
					"The DOM is slow; you want to avoid manipulating it as much as possible. ",
					"jQuery introduced detach() in version 1.4 to help address this issue, allowing you to remove an element from the DOM while you work with it."
				],
				answers: [
					{
						label: "To remove an element from the DOM while you work with it",
						answerId: "t6q3a1"
					},
					{
						label: "To manipulate element efficiently within DOM",
						answerId: "t6q3a2"
					},
					{
						label: "Creates a placeholder in DOM to modify elements",
						answerId: "t6q3a3"
					},
					{
						label: "None of the above",
						answerId: "t6q3a4"
					}
				]
			},
			{
				title: "jQuery won't tell you if you're trying to run a whole lot of code on an empty selection?",
				type: "single",
				questionId: "t6q4",
				correctanswerId: "t6q4a1", 
				description: [
					"jQuery won't tell you if you're trying to run a whole lot of code on an empty selection",
					"– it will proceed as though nothing's wrong. It's up to you to verify that your selection contains some elements."
				],
				answers: [
					{
						label: "True",
						answerId: "t6q4a1"
					},
					{
						label: "False",
						answerId: "t6q4a2"
					}
				]
			},
			{
				title: "Which of this statement is true about using jQuery extensions?",
				type: "single",
				questionId: "t6q5",
				correctanswerId: "t6q5a2", 
				description: [
					"These extensions cannot take advantage of the performance boost provided by the native querySelectorAll()",
					"DOM method and, therefore, require the use of the Sizzle selector engine provided by jQuery."
				],
				answers: [
					{
						label: "Use jQuery extensions as they are performance efficient",
						answerId: "t6q5a1"
					},
					{
						label: "When possible, avoid selectors that include jQuery extensions",
						answerId: "t6q5a2"
					},
					{
						label: "jQuery extensions are faster than normal ID selectors",
						answerId: "t6q5a3"
					},
					{
						label: "None of the above",
						answerId: "t6q5a4"
					}
				]
			},
			{
				title: "A 'flatter' DOM also helps improve selector performance?",
				type: "single",
				questionId: "t6q6",
				correctanswerId: "t6q6a1", 
				description: [
					"A 'flatter' DOM also helps improve selector performance",
					"as the selector engine has fewer layers to traverse when looking for an element."
				],
				answers: [
					{
						label: "True",
						answerId: "t6q6a1"
					},
					{
						label: "False",
						answerId: "t6q6a2"
					}
				]
			},
			{
				title: "What is difference between $( '#container div.child1' ) and $( '#container' ).find( 'div.child1' )",
				type: "single",
				questionId: "t6q7",
				correctanswerId: "t6q7a4", 
				description: [
					"With the first approach, jQuery queries the DOM using document.querySelectorAll().",
					"With the second, jQuery uses document.getElementById(), which is faster"
				],
				answers: [
					{
						label: "They both are same",
						answerId: "t6q7a1"
					},
					{
						label: "First is faster than second approach",
						answerId: "t6q7a2"
					},
					{
						label: "First approach uses document.getElementById() whereas second uses document.querySelectorAll()",
						answerId: "t6q7a3"
					},
					{
						label: "First approach uses document.querySelectorAll() whereas second uses document.getElementById()",
						answerId: "t6q7a4"
					}
				]
			},
			{
				title: "What factor/s should be considered while providing support for older browsers, such as Internet Explorer 8",
				type: "single",
				questionId: "t6q8",
				correctanswerId: "t6q8a2", 
				description: [
					"Specificity : Be specific on the right-hand side of your selector, and less specific on the left.",
					"Avoid the Universal Selector : Selections that specify or imply that a match could be found anywhere can be very slow."
				],
				answers: [
					{
						label: "Avoid using older versions of jQuery as they are less performance efficient",
						answerId: "t6q8a1"
					},
					{
						label: "Specificity and Avoid the Universal Selector",
						answerId: "t6q8a2"
					},
					{
						label: "Always use Universal Selectors",
						answerId: "t6q8a3"
					},
					{
						label: "No specific factors needs to be considered",
						answerId: "t6q8a4"
					}
				]
			},
			{
				title: "Changing the CSS for bulk elements using .css() is faster than adding a style tag to the page",
				type: "single",
				questionId: "t6q9",
				correctanswerId: "t6q9a2", 
				description: [
					"If you're changing the CSS of more than 20 elements using .css()",
					"consider adding a style tag to the page instead for a nearly 60% increase in speed.",
					"Using .css() - $( 'a.links' ).css( 'color', '#0769ad' );",
					"Using style tag - $( '<style type=\"text/css\">a.links { color: #0769ad }</style>').appendTo( 'head' )"
				],
				answers: [
					{
						label: "True",
						answerId: "t6q9a1"
					},
					{
						label: "False",
						answerId: "t6q9a2"
					}
				]
			},
			{
				title: "If no DOM node context passed to jQuery(), context will be equal to the document?",
				type: "single",
				questionId: "t6q10",
				correctanswerId: "t6q10a1", 
				description: [
					"The DOM node context originally passed to jQuery(), if none was passed then context will be equal to the document.",
					"It should be used in conjunction with the selector to determine the exact query used."
				],
				answers: [
					{
						label: "True",
						answerId: "t6q10a1"
					},
					{
						label: "False",
						answerId: "t6q10a2"
					}
				]
			}
		]
	},
	page7: {
		title: "Code Organization",
		questions: [
			{
				title: "Which of the statement is true about appending elements to DOM, to improve performance?",
				type: "single",
				questionId: "t6q1",
				correctanswerId: "t6q1a4", 
				description: [
					"Touching the DOM comes at a cost.  If you're appending a lot of elements to the DOM, you will want to append them all at once, ", 
					"rather than one at a time. This is a common problem when appending elements within a loop."
				],
				answers: [
					{
						label: "You will want to append them all at once, rather than one at a time",
						answerId: "t6q1a1"
					},
					{
						label: "During each iteration of the loop, you append the element to the fragment rather than the DOM element",
						answerId: "t6q1a2"
					},
					{
						label: "Build up a string during each iteration of the loop and just set the HTML of the DOM element to that string",
						answerId: "t6q1a3"
					},
					{
						label: "All of the above",
						answerId: "t6q1a4"
					}
				]
			}
		]
	},
	page8: {
		title: "jQuery UI",
		questions: [
			{
				title: "Which of the statement is true about appending elements to DOM, to improve performance?",
				type: "single",
				questionId: "t6q1",
				correctanswerId: "t6q1a4", 
				description: [
					"Touching the DOM comes at a cost.  If you're appending a lot of elements to the DOM, you will want to append them all at once, ", 
					"rather than one at a time. This is a common problem when appending elements within a loop."
				],
				answers: [
					{
						label: "You will want to append them all at once, rather than one at a time",
						answerId: "t6q1a1"
					},
					{
						label: "During each iteration of the loop, you append the element to the fragment rather than the DOM element",
						answerId: "t6q1a2"
					},
					{
						label: "Build up a string during each iteration of the loop and just set the HTML of the DOM element to that string",
						answerId: "t6q1a3"
					},
					{
						label: "All of the above",
						answerId: "t6q1a4"
					}
				]
			}
		]
	},
	page9: {
		title: "jQuery Mobile",
		questions: [
			{
				title: "Which of the statement is true about appending elements to DOM, to improve performance?",
				type: "single",
				questionId: "t6q1",
				correctanswerId: "t6q1a4", 
				description: [
					"Touching the DOM comes at a cost.  If you're appending a lot of elements to the DOM, you will want to append them all at once, ", 
					"rather than one at a time. This is a common problem when appending elements within a loop."
				],
				answers: [
					{
						label: "You will want to append them all at once, rather than one at a time",
						answerId: "t6q1a1"
					},
					{
						label: "During each iteration of the loop, you append the element to the fragment rather than the DOM element",
						answerId: "t6q1a2"
					},
					{
						label: "Build up a string during each iteration of the loop and just set the HTML of the DOM element to that string",
						answerId: "t6q1a3"
					},
					{
						label: "All of the above",
						answerId: "t6q1a4"
					}
				]
			}
		]
	}
}