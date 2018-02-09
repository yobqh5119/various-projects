const projectImg = document.querySelectorAll('#projects .box-wrapper .box')

const projectBtn = document.querySelectorAll('#projects .box-wrapper .box div .a-container')

for(let i=0; i<projectImg.length; i++){
  projectImg[i].addEventListener('mouseover',()=>{
    projectBtn[i].style.opacity = 1;
  })
}

for(let i=0; i<projectImg.length; i++){
  projectImg[i].addEventListener('mouseout',()=>{
    projectBtn[i].style.opacity = 0;
  })
}
