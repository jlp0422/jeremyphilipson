$(function() {

///////// Hamburger Menu Icon /////////

  $(".hamburger").click(function(e) {
    $(".hamburger").toggleClass("is-active");
    $('#menu-links').slideToggle();
  });

  $(".hamburger").one("click", function(e) {
    $("#dropdown-content1").toggle();
    $("#dropdown-content2").toggle();

  });

  $(window).resize(function() {
    if ($(window).width() > 700) {
      $('#menu-links').removeAttr('style');
    }
  });

////////// Arrow Up / Down Reversal on Hover //////////  

  $(window).width(function() {
    if ($(window).width() > 650) {
      $(".drop1").hover(function() {
        $(".arrow-down1").toggleClass("arrow-up1");
      })
    }
  });

  $(window).width(function() {
    if ($(window).width() > 650) {
      $(".drop2").hover(function() {
        $(".arrow-down2").toggleClass("arrow-up2");
      })
    }
  });

///////// Move Links Down when Clicking - MOBILE ONLY /////////

  $(window).width(function() {
    if ($(window).width() < 650) {
      $(".drop1").click(function() {
        $(".drop1").toggleClass("mobile-padding");
        $(".arrow-down1").toggleClass("arrow-up1");
        $("#dropdown-content1").toggle();
      })
    }
  });

  $(window).width(function() {
    if ($(window).width() < 650) {
      $(".drop2").click(function() {
        $(".drop2").toggleClass("mobile-padding");
        $(".arrow-down2").toggleClass("arrow-up2");
        $("#dropdown-content2").toggle();
      })
    }
  });

////////// Carousel //////////

  $('.slides').slick({
  	adaptiveHeight: true,
  	dots: true,
  	autoplay: true,
  	speed: 1000,
  	arrows: false,
  });
});
