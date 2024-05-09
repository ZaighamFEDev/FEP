function loco(){
    gsap.registerPlugin(ScrollTrigger);


    // --- SETUP START ---
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
        return arguments.length ? locoScroll.scrollTo(value, {duration: 0, disableLerp: true}) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
    });
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.defaults({ scroller: "main" });
    // --- SETUP END ---
    
    
    
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
}
loco();






function setters(){
gsap.set("nav a",{y:"-100%",opacity:0})
gsap.set("#home span .child",{y:"100%"})
gsap.set(".row img",{opacity:0})


document.querySelectorAll("#Visual>g").forEach(function (e) {
    var character = e.childNodes[1].childNodes[1];

    character.style.strokeDasharray = character.getTotalLength() + 'px';
    character.style.strokeDashoffset = character.getTotalLength() + 'px';
})
}

function revealToSpan() {
    let reveal = document.querySelectorAll(".reveal")
    reveal.forEach(function (elem) {
        console.log(elem)
        let parent = document.createElement("span");
        let child = document.createElement("span");

        parent.classList.add("parent");
        child.classList.add("child");

        child.innerHTML = elem.innerHTML;
        parent.appendChild(child);

        elem.innerHTML = "";
        elem.appendChild(parent)

    });
}

function svganim() {
    gsap.to("#Visual>g>g>path,#Visual>g>g>polyline", {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
    })


}


function loaderAnimation() {
    let tl = gsap.timeline();
    tl.from("#loader .child span", {
        x: 100,
        duration: 1,
        delay: 0.5,
        stagger: 0.2,
        ease: Power3.easeInOut

    })
    tl.to("#loader .parent .child", {
        y: "-105%",
        duration: 1,
        ease: Circ.easeInOut,
    })
    tl.to("#loader", {
        height: 0,
        duration: 1,
        delay: -.2,
        ease: Circ.easeInOut,
    })
    tl.to("#green", {
        height: "100%",
        duration: 1,
        top: 0,
        delay: -1,
        ease: Circ.easeInOut,
    })
    tl.to("#green", {
        height: 0,
        delay: -.5,
        duration: 1,
        ease: Circ.easeInOut,
        onComplete: function () {
            homeAnim()
        }
    })

}
function homeAnim(){
    let tl = gsap.timeline()
    tl
    .to("nav a",{
        y:0,
        stagger:.1,
        opacity:1,
        ease:Expo.easeInOut,
    })
    .to("#home .parent .child",{
        y:0,
        stagger:.1,
        opacity:1,
        ease:Expo.easeInOut,
    })
    .to(".row img",{
        opacity:1,
        ease:Expo.easeInOut,
        onComplete:function(){
            svganim()
        }
    })
}

function card(){
    let showingImg;
document.querySelectorAll(".card-div").forEach(function(elem){
    elem.addEventListener("mousemove",function(dets){
    document.querySelector(".cursor").children[dets.target.dataset.index].style.opacity=1;
    showingImg=dets.target;
    document.querySelector(".cursor").children[dets.target.dataset.index].style.transform=`translate(${dets.clientX}px,${dets.clientY}px  )`;
    showingImg.style.filter = "grayscale(1)";
document.querySelector("#page3").style.backgroundColor = dets.target.dataset.color;

})
elem.addEventListener("mouseleave",function(dets){
    document.querySelector(".cursor").children[showingImg.dataset.index].style.opacity=0;
    showingImg.style.filter = "grayscale(0)";
document.querySelector("#page3").style.backgroundColor ="#fff";

})
})
}

revealToSpan();
setters();
loaderAnimation();
card()