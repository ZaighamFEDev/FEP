function loader(){
    let tl =gsap.timeline()

tl.from(".loader h3",{
 opacity:0,
 delay:1,
 duration:1,
 stagger:0.2,
 x:50
})
tl.to(".loader h3",{
    opacity:0,
    duration:1,
    delay:0.3,
 stagger:0.2,
    x:-50
   })
   tl.to(".loader",{
    y:"-100%",
    duration:1
   })
   tl.to(".loader",{
    display:"none"
   })
   tl.from("#page1 #heading h1 span",{
    delay:-0.8,
    opacity:0,
    y:"170%",
    stagger:0.1
   })
}
loader();


function mouseFolllower(){
    let page1C = document.querySelector("#content");
let circle = document.querySelector("#circle");
let main=document.querySelector("main")

page1C.addEventListener("mousemove", function (dets) {
    gsap.to("#circle", {
        x:dets.x,
        y:dets.y
    })
})

page1C.addEventListener("mouseenter", function () {
    gsap.to("#circle", {
        scale:1,
        // opacity:1
    })
})
page1C.addEventListener("mouseleave", function () {
    gsap.to("#circle", {
        scale:0,
        // opacity:0
    })
})
}
mouseFolllower();


function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco()


function landing(){
    gsap.from("#page2-top h4,h3",{
        opacity:0,
        y:50,
        stagger:0.2,
        duration:1,
        scrollTrigger: {
            scroller:"main",
            trigger:"#page2",
            // markers:true,
            start:"top 80%",
            end: "top 50%",
            scrub:2
    
        }
    })
    
    gsap.from("#page2-bottom h1",{
        opacity:0,
        y:120,
        stagger:0.6,
        duration:1,
        scrollTrigger: {
            scroller:"main",
            trigger:"#page2",
            // markers:true,
            start:"top 49%",
            end: "top 30%",
            scrub:2,
          
        }
    })

    gsap.from("#page3-top h1",{
        opacity:0,
        y:50,
        stagger:0.2,
        duration:1,
        delay:0.2,
        scrollTrigger: {
            scroller:"main",
            trigger:"#page3",
            // markers:true,
            start:"top 60%",
            end: "top 31%",
            scrub:2,
        }
    })
    
    
}
landing()


function swipe(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 1250,
            disableOnInteraction:false,
          },
      });
    
}
swipe()


function page4Animation(){
    gsap.from("#page4-top h1",{
        opacity:0,
        y:"100%",
        stagger:0.1,
        duration:1,
        delay:1,
        scrollTrigger:{
            scroller:"main",
            trigger:"#page4-top",
            // markers:true,
            start:"top 85%",
            end:"top 55%",
            scrub:2
    
        }
    })
}
page4Animation()


function page5Animation(){
    gsap.from("#page5-top h1",{
        opacity:0,
        y:"100%",
        stagger:0.1,
        duration:1,
        delay:0.2,
        scrollTrigger:{
            scroller:"main",
            trigger:"#page5-top",
            // markers:true,
            start:"top 75%",
            end:"top 5%",
            scrub:2
    
        }
    })

gsap.from("#page5-bottom h1",{
    opacity:0,
    y:"100%",
    duration:1,
    delay:0.2,
    scrollTrigger:{
        scroller:"main",
        trigger:"#page5-bottom",
        // markers:true,
        start:"top 60%",
        end:"top 45%",
        scrub:2

    }
})
}
page5Animation()


function footer(){
gsap.from("#footer-bottom h1 span",{
    y:-270,
    color:"white",
    // duration:1,
    stagger:0.1,
    delay:1,
    scrollTrigger:{
        scroller:"main",
        trigger:"footer h1",
        // markers:true,
        start:" bottom -100%",
        scrub:2,
        end:"top 60%"
    }

})
}
footer()
