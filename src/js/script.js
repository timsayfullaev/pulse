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

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function catalogItemToggle(link) {
        $(link).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__more').eq(i).toggleClass('catalog-item__more_active');
            })
        });
    };

    catalogItemToggle('.catalog-item__link');
    catalogItemToggle('.catalog-item__link-back');

    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn();
    });

    $('.button_mini').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__text').text($('.catalog-item .catalog-item__title').eq(i).text());
            $('.overlay, #order').fadeIn();
        });
    });

    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #order, #thanks').fadeOut();
    });

    function formValidate(form) {
        $(form).validate({
            rules: {
                name: "required",
                phone: {
                    required: true,
                    minlength: 9
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: "Пожалуйста, введите ваше имя",
                phone: {
                    required: "Пожалуйста, введите ваш номер телефона",
                    minlength: "Пожалуйста, введите номер телефона в формате 123456789"
                },
                email: {
                    required: "Пожалуйста, введите вашу электронную почту",
                    email: "Пожалуйста, введите электронную почту в формате name@domain.com"
                }
            }
        });
    };

    formValidate('#consultationSection');
    formValidate('#consultation form');
    formValidate('#order form');
});