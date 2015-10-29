$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
        $('header').addClass("scrolled");
    } else {
        $('header').removeClass("scrolled");
    }
});