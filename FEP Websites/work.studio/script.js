const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});
function loader(){
    
let tl = gsap.timeline();
tl.to("#loader1", {
    y: "-100%",
    delay: 0.5,
    duration: 0.8,
})
tl.to(".loader video", {
    y: "-100%",
    duration: 0.9,
}, "anim")

tl.to(".loader #text1", {
    delay: 0.2,
    color: "black",

}, "anim")
tl.to(".loader", {
    duration:1,
    color: "black",
    opacity: 0,
    display:"none"
})

}
loader();

let elems=document.querySelectorAll(".elem");
let page2=document.querySelector("#page2");
elems.forEach(function(e){
e.addEventListener("mouseenter",function(){
   let img= e.getAttribute("data-image");
   console.log(img)
   console.log(page2)
   page2.style.backgroundImage = `url(${img})`
//    page2.style.backgroundColor=`red`
// page2.innerHTML="<h1>hello</h1>"


})

})