$(function () {
    $('.slider__inner').slick({
        nextArrow:'<button type="button" class="slick-btn slick-next"></button>',
        prevArrow:'<button type="button" class="slick-btn slick-prev"></button>',
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1

    });
    $('.header__btn-menu').on('click', function(){
        $('.menu ul').slideToggle();
    });
    
});

