$(document).ready(function () {   
    $('.menu__link').mouseenter(function (event) {
      $(this).parent().addClass('hover');
   });  
   $('.menu__item').mouseleave(function (event) {  
    $(this).removeClass('hover');
   });
   $('.menu__item').click(function (event) {  
    $(this).addClass('active');
   });   
   $('.header__burger').click(function (event) {
      $('.header__burger, .menu').toggleClass('active');
       $('html, body').toggleClass('lock');
      
   });
   $('.header__burger').click(function (event) {
      if(!$(this).hasClass('.active'))
      {
        $('.menu__item').removeClass('active');
      }
   });
    $('.mission__video').click(function (event) {
       $('.popup').addClass('open');
    });
    $('.popup__body span').click(function (event) {
       $('.popup').removeClass('open');
    }); 
    $('.popup__body p').click(function (event) {
       $('.popup').removeClass('open');
    });  
    $('.start__button, .main__btn, .recovery__button').click(function (event) {
       $('.popup-start').addClass('open');
    });  
    $('.popup-start>img').click(function (event) {
       $('.popup-start').removeClass('open');
    });               
});
AOS.init();

$(document).ready(function () {  
$('.events__slider').slick({
      arrows: true,
      dots: false,
      adaptiveHeight: false,
      centerMode: false,
      slidesToShow: 1,
      slidesToScroll: 1,      
      speed: 900,
      easing: 'ease-in',
      infinite: true,
      autoplay: false,
      draggable: true,
      swipe: true,
      touchThreshold: 5,    
});      
});

var rev = $('.rev_slider');
if ($(window).width() > 625) {
rev.on('init', function(event, slick, currentSlide) {
  var
    cur = $(slick.$slides[slick.currentSlide]),
    next = cur.next(),
    prev = cur.prev();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');
  cur.removeClass('slick-snext').removeClass('slick-sprev');
  slick.$prev = prev;
  slick.$next = next;
}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
  var
    cur = $(slick.$slides[nextSlide]);
  slick.$prev.removeClass('slick-sprev');
  slick.$next.removeClass('slick-snext');
  next = cur.next(),
    prev = cur.prev();
  prev.prev();
  prev.next();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');
  slick.$prev = prev;
  slick.$next = next;
  cur.removeClass('slick-next').removeClass('slick-sprev');
});

rev.slick({
  speed: 1000,
  arrows: true,
  dots: false,
  focusOnSelect: true,
  infinite: true,
  centerMode: true,
  slidesPerRow: 1,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: '0',
  swipe: true,
  customPaging: function(slider, i) {
    return '';
  },
  /*infinite: false,*/
});
}else{
rev.slick({
  speed: 1000,
  arrows: true,
  dots: false,
  focusOnSelect: true,
  infinite: true,
  centerMode: true,
  slidesPerRow: 1,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: '0',
  swipe: true,
  customPaging: function(slider, i) {
    return '';
  },
  /*infinite: false,*/
});
}
