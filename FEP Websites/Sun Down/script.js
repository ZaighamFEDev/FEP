function scrollTrigger(){
  const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
}

function fixedImg(){
let fixed=document.querySelector("#fixed-image");
let elemc=document.querySelector("#elem-container");
let elems=document.querySelectorAll(".elems");

elemc.addEventListener("mouseenter",function(){
    fixed.style.display="block"
})
elemc.addEventListener("mouseleave",function(){
    fixed.style.display="none"
})

elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
      var image=e.getAttribute("data-image");
      fixed.style.backgroundImage=`url(${image})`;
    })
})
}

function swiperAnimation(){
var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 60,
});
}

function loaderAnimation(){
let load = document.querySelector(".loader");
setTimeout(function(){
load.style.top="-100%"
},3500);
}

scrollTrigger();
fixedImg();
swiperAnimation();
loaderAnimation();

let menu=document.querySelector("nav h3");
let full=document.querySelector("#full-scr");
let menuItems=document.querySelector("#menu-items")
var flag=0;
let navItems=document.querySelector("#nav-items")
let image=document.querySelector("nav img")
menu.addEventListener("click",function(){
  if(flag==0){
    full.style.top="0";
    image.style.opacity="0"
    // menuItems.style.display="block"

    flag=1;
  }else{
    full.style.top="-100%";
    image.style.opacity="1" ;
    // menuItems.style.display="none"

    flag=0;
  }

})

