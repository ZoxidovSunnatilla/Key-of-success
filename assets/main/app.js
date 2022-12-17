/* Sunnat start */
$(window).scroll(function () {
    $('header').each(function () {
        if ($(this).offset().top < $(window).scrollTop()) {
            $('.nav').css('opacity', '1')
        }
        setTimeout(function () {
            $(".nav").css('opacity', '0');
        }, 5000);
    })


})

/* Sunnat end */
/* Husniddin start */

/* Husniddin end */
/* Azam start */

/* Azam end */
/* Abbos start */

/* Abbos end */
/* Dilnoza start */

/* Dilnoza end */