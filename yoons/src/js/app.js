$(function(){
  // collapse button
  $('.collapse-bar').on('click',function(){
    $('.main-menu').toggleClass('active', 200);
  })

  // opacity background when scrolling down
  $(window).on('scroll',function(){
    if($(window).scrollTop()){
      $('nav').addClass('black');
    }else{
      $('nav').removeClass('black');
    }
  });

  function initMap() {
    var uluru = {lat: 40.078277, lng: -75.301571};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 19,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }
})
