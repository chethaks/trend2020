/** Page Jquery */
$(document).ready(function() {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});

/** Page Parallax */
var rellax = new Rellax('.rellax'); // Accepts any class name