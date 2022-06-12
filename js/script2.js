$(document).ready(function () {   
	$("#popup-start__form button").on('click', function(e){
		e.preventDefault();
		var form = $(this);
			var form = $(this).closest('form');
			$.ajax({
				url: '/site/send-contact',
				data: form.serializeArray(),
				type: 'POST',
				success:function(data){
					var data = JSON.parse(data);
					if(data.success){
						alert(data.message);
						$(".error").remove();
						$('.popup-start > img').trigger('click');
						$(form)[0].reset();
						//location.reload();
					} else {
						$(".error").remove();
						$(form).find('.popup-start__form-title').after( data.message );
					}
				}
			});	
	});
	
	$("#footer__form button").on('click', function(e){
		e.preventDefault();
			var form = $(this);
			var form = $(this).closest('form');
			$.ajax({
				url: '/site/send-contact',
				data: form.serializeArray(),
				type: 'POST',
				success:function(data){
					var data = JSON.parse(data);
					if(data.success){
						alert(data.message);
						$(".error").remove();
						$(form)[0].reset();
						//location.reload();
					} else {
						$(".error").remove();
						$(form).find('#footer_submit').before( data.message );
					}
				}
			});	
	});	
		
	
	
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
    $('.start__button, .main__btn, .recovery__button,.events__button ').click(function (event) {
       $('.popup-start').addClass('open');
    });  
    $('.popup-start>img').click(function (event) {
       $('.popup-start').removeClass('open');
    });
});
$(document).scroll(function () {
    s_top = $(window).scrollTop() + $(window).height();
    $(".title").each(function()
    {
      if(s_top > $(this).offset().top){
        $(this).addClass('scroll');
      } 
      else{
        $(this).removeClass('scroll');
      }
    });
    $(".title1").each(function()
    {
      if(s_top > $(this).offset().top){
        $(this).addClass('scroll');
      } 
      else{
        $(this).removeClass('scroll');
      }
    });  
    $(".title2").each(function()
    {
      if(s_top > $(this).offset().top){
        $(this).addClass('scroll');
      } 
      else{
        $(this).removeClass('scroll');
      }
    }); 
});
$(document).ready(function () { 
  $(".rev_slide").addClass("cloud9-item");
  $(".rev_slider").Cloud9Carousel( {
    autoPlay: 0,
    yRadius:-48,
    bringToFront: true,
    frontItemClass: 'active', 
    xRadius:-600,
  });
  if ($(window).width() <= '1485'){
    $(".rev_slider").Cloud9Carousel( {
      autoPlay: 0,
      yRadius:-48,
      bringToFront: true,
      frontItemClass: 'active',      
      xRadius:-420,
    });
  }
  if ($(window).width() <= '1145'){
    $(".rev_slider").Cloud9Carousel( {
      autoPlay: 0,
      yRadius:-48,
      bringToFront: true,
      frontItemClass: 'active',      
      xRadius:-350,
    });
  }
  if ($(window).width() <= '1024'){
    $(".rev_slider").Cloud9Carousel( {
      autoPlay: 0,
      yRadius:-48,
      bringToFront: true,
      frontItemClass: 'active',      
      xRadius:-200,
    });
  }
  if ($(window).width() <= '808'){
    $(".rev_slider").Cloud9Carousel( {
      autoPlay: 0,
      yRadius:-48,
      bringToFront: true,
      frontItemClass: 'active',      
      xRadius:-100,
    });
  }   
  if ($(window).width() <= '531'){
    $(".rev_slider").Cloud9Carousel( {
      autoPlay: 0,
      yRadius:-48,
      bringToFront: true,
      frontItemClass: 'active',      
      xRadius:-50,
    });
  }    
  $('.rev_slide').click(function() {
	  /*
    setTimeout(sayHi, 500);
    function sayHi() {
      if($('.rev_slide:first-child').hasClass('active')){
        $('.slide__controls input').attr('checked', false);
        $('#firstControl').attr('checked', true);
        console.log('1-el');
      }
      if($('.rev_slide:nth-child(2)').hasClass('active')){
        $('.slide__controls input').attr('checked', false);
        $('#secondControl').attr('checked', true);
        console.log('2-el');
      }    
      if($('.rev_slide:nth-child(3)').hasClass('active')){
        $('.slide__controls input').attr('checked', false);
        $('#thirdControl').attr('checked', true);
        console.log('3-el');
      }  
      if($('.rev_slide:nth-child(4)').hasClass('active')){
        $('.slide__controls input').attr('checked', false);
        $('#forthControl').attr('checked', true);
        console.log('4-el');
      }  
      if($('.rev_slide:nth-child(5)').hasClass('active')){
        $('.slide__controls input').attr('checked', false);
        $('#fivthControl').attr('checked', true);
        console.log('5-el');
      }   
      if($('.rev_slide:nth-child(6)').hasClass('active')){
        $('.slide__controls input').attr('checked', false);
        $('#sixControl').attr('checked', true);
        console.log('6-el');
      }    
    } 
	*/
	
		var id = $(this).attr('data-id');
		$(".slide__controls input[data-id='"+id+"']").prop('checked', true);
	
	}); 

	$('.slide__controls input').click(function() {
		$('.rev_slider').data("carousel").goTo( $(this).attr('data-index') );
	});
/*		
  $('#firstControl').click(function() {
      $('.rev_slider').data("carousel").goTo( 0 );
  });
  $('#secondControl').click(function() {
      $('.rev_slider').data("carousel").goTo( 1 );
  });
  $('#thirdControl').click(function() {
      $('.rev_slider').data("carousel").goTo( 2 );
  });
  $('#forthControl').click(function() {
      $('.rev_slider').data("carousel").goTo( 3 );
  });
  $('#fivthControl').click(function() {
      $('.rev_slider').data("carousel").goTo( 4 );
  });
  $('#sixControl').click(function() {
      $('.rev_slider').data("carousel").goTo( 5 );
  });
*/
  var max = 0;
  $(".slide__text").each( function(index,elem){
	 var height = $(this).height();
	 if(max < height){
		max = height;
	}
  });
  
   $('.slide__text').height(max);
/* 
  var items = $('.slide__text');
  var item1 = items[0];
  var item2 = items[1];
  var item3 = items[2];
  var item4 = items[3];
  var item5 = items[4];
  var item6 = items[5];      
  item1Height = $(item1).height();
  item2Height = $(item2).height();
  item3Height = $(item3).height();
  item4Height = $(item4).height();
  item5Height = $(item5).height();
  item6Height = $(item6).height();      
  var max = 0;
  if(max<item1Height){
     max = item1Height;
  }
  if(max<item2Height){
     max = item2Height;
  }
  if(max<item3Height){
     max = item3Height;
  }
  if(max<item4Height){
     max = item4Height;
  }
  if(max<item5Height){
     max = item5Height;
  }
  if(max<item6Height){
     max = item6Height;
  }
  $('.slide__text').height(max);
*/ 
  $('.rev_slider').height($('.rev_slide').height());

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

AOS.init();