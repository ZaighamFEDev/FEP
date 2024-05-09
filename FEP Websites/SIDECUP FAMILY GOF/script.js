let crsr = document.querySelector("#circle");
let crsrBlur = document.querySelector("#circle-blur");
let navItems = document.querySelectorAll("nav a")

function cursor(){
    document.addEventListener("mousemove",function(dets){
        crsr.style.top=dets.y + "px";
        crsrBlur.style.top=dets.y + "px";
        crsr.style.left=dets.x+  "px";
        crsrBlur.style.left=dets.x + "px";
    })
}
cursor()



navItems.forEach(elem => {
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=2;
        crsr.style.border="1px solid #fff";
        crsr.style.backgroundColor="transparent";
        
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1;
        crsr.style.border="0px solid #B9E83A;";
    crsr.style.backgroundColor="#B9E83A";
        
    })
});

gsap.to("#content",{
    backgroundColor:"black",
    height:"100px",
    duration:1,
    deley:1,
    scrollTrigger : {
        scroller:"body",
        trigger:"#page1",
        // markers:true,
        strat:"top 30%",
        end:"top 10%",
        scrub:2
    }
    })
gsap.to("nav",{
    backgroundColor:"black",
    height:"100px",
    scrollTrigger:{
        scroller:"body",
        trigger:"#page1",
        // markers:true,
        start:"top -3%",
        end:"top -20%",
        scrub:1,
    }

})

gsap.to("main",{
    backgroundColor:"black",
    scrollTrigger:{
        scroller:"body",
        trigger:"#page2",
        // markers:true,
        start:"top 70%",
        end:"top 50%",
        scrub:3,
    }

})

gsap.from("#page4-top #c1",{
    y:-40,
    x:-40,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page4",
        // markers:true,
        start:'top 40%',
        end:"top 0%",
        scrub:2,

    }
})

gsap.from("#page4-top #c2",{
    y:40,
    x:40,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page4",
        // markers:true,
        start:'top 40%',
        end:"top 0%",
        scrub:2,

    }
})

gsap.from("#page4-bottom h1",{
    y:50,
    duration:0.2,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page4-bottom",
        markers:true,
        start:'top 80%',
        end:"top 70%",
        scrub:1,

    }
})