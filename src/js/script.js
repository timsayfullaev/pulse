$(document).ready(function () {
    $('.pulse-monitor__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrows/chevron-left-solid.png" alt="chevron-left-solid"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrows/chevron-right-solid.png" alt="chevron-right-solid"></button>',
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
});