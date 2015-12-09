function window_res(){
	$(".wrap_info").css({
		"width": $(window).width() - 410 + "px",
	});
}

$(document).ready(function(){
	window_res();
	$(window).resize(function(){window_res();});
});