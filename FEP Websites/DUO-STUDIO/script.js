let circle = document.querySelector("#circle");
let main = document.querySelector("main");
let boxes = document.querySelectorAll(".element");
let nav = document.querySelector("nav");
let navanim = document.querySelector(".nav-hover")
let hover = document.querySelectorAll(".hover")
let h4 = document.querySelectorAll(".nav-center h4")



main.addEventListener("mousemove", function (dets) {
    circle.style.top = dets.y + "px";
    circle.style.left = dets.x + "px";
})

function navigation() {
    nav.addEventListener("mouseenter", function () {
        navanim.style.opacity = 1;
        navanim.style.display = "block";
        console.log("hey")
    })

    nav.addEventListener("mouseleave", function () {
        navanim.style.opacity = 0;
        navanim.style.display = "none";
        console.log("by")
    })

    navigation2()
}
navigation()

function navigation2() {
    h4.forEach(function (elem) {
        elem.addEventListener("mouseenter", function (a) {
            navigation3(a)
            elem.style.color = "red"

        })
    })
}

function navigation3() {
    hover.forEach(function (elem) {
        elem.style.opacity = 1
        console.log("hover")
        console.log(elem)

    })
}






function box() {
    boxes.forEach(function (elem) {

        elem.addEventListener("mouseenter", function () {

            let att = elem.getAttribute("data-image")
            // console.log(att)
            circle.style.height = "25vw"
            circle.style.width = "35vw"
            circle.style.position = "absolute"
            circle.style.zIndex = 99
            circle.style.borderRadius = "20px"
            circle.style.backgroundImage = `url(${att})`


        })
        elem.addEventListener("mouseleave", function () {
            circle.style.height = "15px"
            circle.style.width = "15px"
            circle.style.borderRadius = "50%"
            circle.style.backgroundImage = `none`

        })
    })
}
box()

gsap.from("#page1 h1,#page1 h2", {
    y: 10,
    rotate: 10,
    opacity: 0,
    duration: 1,
    delay: 0.7,
    // scrub:2,
})




function marquee() {
    // nav=document.querySelector("nav")
    // navAnim=document.querySelector(".nav-anim")
    // h4=document.querySelectorAll(".h4")
    // marq=document.querySelectorAll(".marq1")
    // marq=document.querySelectorAll(".marq2")

    // marq=document.querySelectorAll(".marq3")

    // marq=document.querySelectorAll(".marq4")


    // nav.addEventListener("mouseenter" ,function (){
    // navAnim.style.display="block";
    // navAnim.style.opacity="1"
    // // console.log("bavar")

    //        })

    //        h4.forEach(function(elem){
    //         elem.addEventListener("mouseenter",function(){
    //             console.log(elem)
    //                 marq.style.display="block";
    //                 marq.style.opacity="1";

    //                 console.log(w)


    //            })
    //             // console.log("hit h4")
    //         })


    //     //    h4.forEach(function(elem){
    //     //     elem.addEventListener("mouseleave",function(){
    //     //        marq.forEach(function(e){
    //     //         e.style.display="none";
    //     //         e.style.opacity="0"
    //     //        })
    //     //         // console.log("hit h4")
    //     //     })
    //     //    })



    // nav.addEventListener("mouseleave" ,function (){
    //     navAnim.style.display="none";
    //     navAnim.style.opacity="0"

    //     })
}
// marquee()

function loco() {

    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }

        // follwoing line is not required to work pinning on touch screen

        /* pinType: document.querySelector(".smooth-scroll").style.transform
          ? "transform"
          : "fixed"*/
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();



}
loco()
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#page1 h1",
        scroller: "main",
        start: "top 5%",
        end: "top -10%",
        // markers:true,
        scrub: 3
    }
})

tl.to("#page1 h1", {
    x: -100,
    duration: 1,
}, "anim")

tl.to("#page1 h2", {
    x: 100,
    duration: 1,
}, "anim")

tl.to("#page1 video", {
    scale: 2,
    duration: 1,
}, "anim")
tl.to("nav", {
    color: "white"
}, "anim")


let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page2",
        scroller: "main",
        start: "top 77%",
        end: "top 30%",
        // markers:true,
        scrub: 3,
    }
})
tl2.to("main", {
    backgroundColor: "white",
})
tl2.to("nav", {
    color: "black"
})

let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page3",
        scroller: "main",
        start: "top 10%",
        end: "top 0",
        scrub: 3,
        //  markers:true
    }
})

tl3.to("#page3 #img1", {
    right: "5%"
}, "same")
tl3.to("#page3 #img2", {
    left: "5%"
}, "same")


let tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page4",
        scroller: "main",
        start: "top 80%",
        end: "top 0",
        scrub: 3,
        //  markers:true
    }
})

tl4.to("main", {
    backgroundColor: "black",
})