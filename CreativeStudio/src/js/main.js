$(function(){
  // Scrolling Action
  $(window).on('scroll',function(){
    if($(window).scrollTop()){
      $('header').css({
        display:'none'
      })
    }else{
      $('header').css({
        display:'block'
      })
    }
  })

// Scrolling animation effect
  $(window).on('scroll', function(){
    var userScroll = $(window).scrollTop();
    console.log($(window).width());
    if(userScroll >= 300){
      $('#services .row .col-md-3').css({
        display:'block'
      })
      $('#services .row .play-section').css({
        display:'flex'
      })
      $('#services .row').addClass('animated fadeInRight')
    }
    if(userScroll >= 1000){
      $('#feature .title-container').css({
        display:'block'
      })
      $('#feature .img-container').css({
        display:'block'
      })

      if($(window).width() <= 500){
        $('#feature .row .col-md-3').css({
          display:'block'
        })
      }else{
        $('#feature .row .col-md-3').css({
          display:'flex'
        })
      }


      $('#feature .title-container').addClass('animated fadeInRight')
      $('#feature .img-container').addClass('animated fadeInLeft')
      $('#feature .row .col-md-3').addClass('animated rotateIn')
    }
  })



  //navbar
  $('.fa-align-justify').on('click',function(){
    $('.main-menu').toggleClass('active');
    $('header').toggleClass('active');
    if($('.main-menu').hasClass('active')){
      $('#title-content .title-text').css({
        display:'none'
      })
    }else{
      $('#title-content .title-text').css({
        display:'block'
      })
    }
  })
})
