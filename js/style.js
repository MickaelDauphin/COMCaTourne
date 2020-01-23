var swiper = new Swiper('.swiper-container', {
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    }
});

$(document).ready(function () {

    $(window).scroll(function () {

        var height = $('.first-container').height();
        var scrollTop = $(window).scrollTop();

        if (scrollTop >= height - 40) {
            $('.nav-container').addClass('solid-nav');
        } else {
            $('.nav-container').removeClass('solid-nav');
        }

    });
});