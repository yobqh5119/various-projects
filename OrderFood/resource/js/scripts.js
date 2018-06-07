$(document).ready(function() {

  // STICKY NAVIGATION
  $('.js--section-feature').waypoint(function(direction){
    if(direction == 'down'){
      $('nav').addClass('sticky');
    }
    else{
      $('nav').removeClass('sticky');
    }
  },{
    offset:'60px;'
  });

  // Scroll on Buttons
  $('.js--scroll-to-plans').click(function(){
    $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
  });

  $('.js--scroll-to-start').click(function(){
    $('html, body').animate({scrollTop: $('.js--section-feature').offset().top}, 1000);
  });


  // Navigation Scroll
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  // Animation on Scroll
  $('.js--wp-1').waypoint(function(direction){
    $('.js--wp-1').addClass('animated fadeIn');
  }, {
    offset:'50%'
  });

  $('.js--wp-2').waypoint(function(direction){
    $('.js--wp-2').addClass('animated fadeInUp');
  }, {
    offset:'50%'
  });


  $('.js--wp-3').waypoint(function(direction){
    $('.js--wp-3').addClass('animated fadeIn');
  }, {
    offset:'50%'
  });

  $('.js--wp-4').waypoint(function(direction){
    $('.js--wp-4').addClass('animated pulse');
  }, {
    offset:'50%'
  });

  // Mobile Navigation
  $('.js--nav-icon').click(function(){
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');

    if(icon.hasClass('ion-ios-menu')){
      icon.addClass('ion-ios-close');
      icon.removeClass('ion-ios-menu');
    }else{
      icon.addClass('ion-ios-menu');
      icon.removeClass('ion-ios-close');
    }
    nav.slideToggle(200);
  })


});
