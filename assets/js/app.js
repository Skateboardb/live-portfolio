// $(document).ready(function() {
// 	// get current URL path and assign 'active' class
// 	var pathname = window.location.pathname;
// 	$('.navbar > a[href="' + pathname + '"]')
// 		// .parent()
// 		.addClass("active");
// });

var height = $(".flex").height();

$(window).scroll(function() {
	if ($(this).scrollTop() > height) {
		$(".navbar-bg").addClass("fixed");
	} else {
		$(".navbar-bg").removeClass("fixed");
	}
});

var lastId,
	navbar = $(".navbar"),
	navbarHeight = navbar.outerHeight() + 15,
	// All list items
	menuItems = navbar.find("a"),
	// Anchors corresponding to menu items
	scrollItems = menuItems.map(function() {
		var item = $($(this).attr("href"));
		if (item.length) {
			return item;
		}
	});

// var data = {
// 	// A labels array that can contain any sort of values
// 	labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
// 	// Our series array that contains series objects or in this case series data arrays
// 	series: [[5, 2, 4, 2, 0]]
// };

// // Create a new line chart object where as first parameter we pass in a selector
// // that is resolving to our chart container element. The Second parameter
// // is the actual data object.
// new Chartist.Bar(".ct-chart", data);

new Chartist.Bar(
	".ct-chart",
	{
		labels: ["MySQL", "Node.js", "Javascript", "CSS3", "HTML5"],
		series: [[2, 3, 3.5, 4, 5]]
	},
	{
		horizontalBars: true,
		// showPoint: false,
		// showLine: false,
		// showArea: true,
		// fullWidth: true,
		// showLabel: true,
		axisX: {
			showGrid: false,
			showLabel: false
			// offset: 0
		},
		axisY: {
			showGrid: false,
			showLabel: true,
			offset: 70
		}
		// chartPadding: 0,
		// low: 0
	}
);
