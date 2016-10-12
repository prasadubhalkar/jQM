/* exported indexItems, pages, homeIntro */

var homeIntro = {
	title: "Code Quality",
	topics: [
		{
			title: "What?",
			details: "This application will provide you with tips and trick to improve code quality and software application"
		},
		{
			title: "Why?",
			details: "Code is the core of an software application, improving the code will improve the software application"
		},
		{
			title: "Who?",
			details: "Novice developers can use this application to learn new tips, Experienced developers can use this as a revision"
		},
		{
			title: "Where?",
			details: "This tips are been borrowed from Code Complete 2 by Steve McConnell"
		},
		{
			title: "How?",
			details: "Select the menu to navigate through the chapters"
		},
		{
			title: "More?",
			details: "To check out more details for each topic please refer to the book"
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
		title: "Foundation",
		pageIndex: 1
	},
	{
		title: "Creating High-Quality Code",
		pageIndex: 2
	},
	{
		title: "Variables",
		pageIndex: 3
	},
	{
		title: "Statements",
		pageIndex: 4
	},
	{
		title: "Code Improvements",
		pageIndex: 5
	},
	{
		title: "System Considerations",
		pageIndex: 6
	},
	{
		title: "Software Craftsmanship",
		pageIndex: 7
	}
];

/**
 * Will hold titles for each topic under the page and its details
 */
var pages = {
	page1: {
		title: "Foundation",
		topics: [
			{
				title: "Software Construction",
				description: "In every software development project we can skip requirements, design, testing but" +
					"we cannot skip coding/construction that is where the rubber meets the road," +
					"Improving construction is thus a way of improving any software-development effort, no matter how abbreviated",
				details: [
					"Verifying that the groundwork has been laid so that construction can proceed successfully",
					"Determining how your code will be tested ",
					"Designing and writing classes and routines ",
					"Creating and naming variables and named constants ",
					"Selecting control structures and organizing blocks of statements ",
					"Unit testing, integration testing, and debugging your own code ",
					"Reviewing other team members’ low-level designs and code and having them ",
					"Polishing code by carefully formatting and commenting it ",
					"Integrating software components that were created separately ",
					"Tuning code to make it faster and use fewer resources"
				]
			},
			{
				title: "Understanding of Software Development",
				details: [ "Details to Come" ]
			},
			{
				title: "Measure Twice, Cut Once",
				details: [ "Details to Come" ]
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