$(window).scroll(function () {
    var scrollPos = $(window).scrollTop();
    if (scrollPos > 120) {
        $('#sticky_header').addClass('sticky');
    }
    else {
        $('#sticky_header').removeClass('sticky');
    }
});