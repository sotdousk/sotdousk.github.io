//// When the user scrolls down 20px from the top of the document, show the button
//window.onscroll = function() {scrollFunction()};

//function scrollFunction() {
//    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//        document.getElementById("myBtn").style.display = "block";
//    } else {
//        document.getElementById("myBtn").style.display = "none";
//    }
//}

// When the user clicks on the button, scroll to the top of the document
//function topFunction() {
//    document.body.scrollTop = 0;
//    document.documentElement.scrollTop = 0;
//
/*  Scroll to top when arrow up clickec BEGIN */
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
	$('#back2Top').fadeIn();
    } else {
	$('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
	return false;
    });

});
/* Scroll to top when arrow up clicked END */
