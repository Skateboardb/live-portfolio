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
