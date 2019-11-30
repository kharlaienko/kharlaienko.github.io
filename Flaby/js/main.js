$(function(){
    $('.item-1').click(function(){
        $('.inner-1').slideToggle();
    });
     $('.item-2').click(function(){
        $('.inner-2').slideToggle();
    });
     $('.item-3').click(function(){
        $('.inner-3').slideToggle();
    });
     $('.item-4').click(function(){
        $('.inner-4').slideToggle();
    });
     $('.item-5').click(function(){
        $('.inner-5').slideToggle();
    });
    $('.reviews__slider').slick({
        vertical: true,
        verticalSwiping: true,
        infinite: false,
        slidesToShow: 2,
        autoplay: false,
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite: false,
    });
    $('#team-1').click(function(){
       $('#team-1').addClass('team__photo--active');
       $('#team-2').removeClass('team__photo--active');
       $('#team-3').removeClass('team__photo--active');
       $('#team-c-1').addClass('team__content--active');
       $('#team-c-2').removeClass('team__content--active');
       $('#team-c-3').removeClass('team__content--active');
    });
     $('#team-2').click(function(){
       $('#team-2').addClass('team__photo--active');
       $('#team-1').removeClass('team__photo--active');
       $('#team-3').removeClass('team__photo--active');
       $('#team-c-2').addClass('team__content--active');
       $('#team-c-1').removeClass('team__content--active');
       $('#team-c-3').removeClass('team__content--active');
    });
     $('#team-3').click(function(){
       $('#team-3').addClass('team__photo--active');
       $('#team-2').removeClass('team__photo--active');
       $('#team-1').removeClass('team__photo--active');
       $('#team-c-3').addClass('team__content--active');
       $('#team-c-2').removeClass('team__content--active');
       $('#team-c-1').removeClass('team__content--active');
    });
    $('.header__btn-menu').on('click', function(){
        $('.header-top__nav ul').slideToggle();
    });
    
});
