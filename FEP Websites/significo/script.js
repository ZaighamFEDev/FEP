function home(){
    gsap.set(".zomoutefct",{scale:5})

var tl = gsap.timeline({
    scrollTrigger: {
        trigger:".home",
        start:"top top",
        end:"bottom bottom",
        // markers:true,
        scrub:2,
       }
})

tl.to(".videodiv", {
    '--clip': "0%",
    ease:Power2,
}, 'a')
tl
.to(".zomoutefct", {
    scale:1,
    ease:Power2,
}, 'a')
.to(".lft", {
    xPercent:-5,
    stagger:.02,
    ease:Power4,
}, 'b')
.to(".rgt", {
    xPercent:7,
    stagger:.02,
    ease:Power4,
}, 'b')
}

function slides(){
    gsap.to(".slide",{
        scrollTrigger: {
            trigger:'.page3',
            start:"top top",
            end:"bottom bottom",
            // markers:true,
            scrub:1,
        },
        xPercent:-210,
        eae:Power4,
        duration:2,
    })
}

function team(){
let elems=document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mousemove",function(dets){
       
        gsap.to(this.querySelector(".pic"),{opacity: 1, x: gsap.utils.mapRange(0,window.innerWidth,-200,200,dets.clientX), ease: Power4, duration: .5});
     console.log(e)
    })
    e.addEventListener("mouseleave",function(dets){
     gsap.to(this.querySelector(".pic"),{opacity: 0, ease: Power4, duration: .5});
        

    })
})
}

function span(){
let clutter = "";
document.querySelector(".para")
.textContent.split("")
.forEach(function(e){
    if(e === "") clutter+=`<span>&nbsp;</span>`
    clutter+=`<span>${e}</span>`
    document.querySelector(".para").innerHTML=clutter;
})

gsap.set(".para span",{opacity:.01});

gsap.to(".para span",{
    scrollTrigger: {
        trigger:".para",
        start:"top 50%",
        end:"bottom 90%",
        scrub:.2,
        // markers:true,
    },
    opacity:1,
    ease:Power4,
    stagger:.03
})
}

function color(){
    document.querySelectorAll(".section")
    .forEach(function(e){
        ScrollTrigger.create({
            trigger:e,
            start:"top 50%",
            end:"bottom 50%",
            markers:true,
            onEnter:function(){
              document.body.setAttribute("theme",e.dataset.color)
            },
            onEnterBack:function(){
                document.body.setAttribute("theme",e.dataset.color)
                
            }
        })
    })
}

home()
slides()
team()
span()
color()