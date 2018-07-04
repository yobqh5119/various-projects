// Navigation

// let btnBefore = document.querySelector('.navigation .navigation__background--before');
// let btnAfter = document.querySelector('.navigation .navigation__background--after');
// let nav = document.querySelector('.navigation__nav');
//
//
// btnBefore.addEventListener('click', navigation);
//
// function navigation(){
//   if(btnAfter.style.transform){
//     return btnAfter.style.transform = "scale(0)";
//   }else{
//     return btnAfter.style.transform = "scale(70)";
//   }
// }

$('.navigation__background--before').click(function(){
  $('.navigation__background--after').toggleClass("active-background-after");
  $('.navigation__nav').toggleClass("active-nav");

  if($('.navigation__background--after').hasClass("active-background-after")){
    $('.navigation__icon').addClass("active-icon");
  }else{
    $('.navigation__icon').removeClass("active-icon");
  }
})

$('.navigation__background--before').hover(function(){
  $('.navigation__icon').toggleClass("hover-effect");
})


$('.navigation__link').click(function(){
  $('.navigation__background--after').toggleClass("active-background-after");
  $('.navigation__nav').toggleClass("active-nav");

  if($('.navigation__background--after').hasClass("active-background-after")){
    $('.navigation__icon').addClass("active-icon");
  }else{
    $('.navigation__icon').removeClass("active-icon");
  }
})
