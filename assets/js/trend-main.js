/** Page Jquery */
$(document).ready(function() {
    /** Sticky Menu */
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });

    /** Scroll to section */
    $("#market").click(function() {
        $('html, body').animate({
            scrollTop: $("#marketSection").offset().top
        }, 2000);
    });

    $("#covid").click(function() {
        $('html, body').animate({
            scrollTop: $("#covidSection").offset().top
        }, 2000);
    });

    /** Scroll to top */
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scrollTop').fadeIn(); 
        } else { 
            $('#scrollTop').fadeOut(); 
        } 
    });

    $('#scrollTop').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 2000);
        return false; 
    }); 
});

/** Page Parallax */
var rellax = new Rellax('.rellax'); // Accepts any class name