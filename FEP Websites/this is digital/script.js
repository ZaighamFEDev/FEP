setTimeout(function(){
    gsap.from(".img1",{
        opacity:0,
        duration:1,
        x:100,
        
        })
        
        gsap.from(".img3",{
            opacity:0,
            duration:1,
            y:-60,
            
            })
        
            gsap.from(".img2",{
                // delay:.4,
                opacity:0,
                duration:1,
                y:50,
                })
},4070)

       let circle= document.querySelector(".cursor");
       let main= document.querySelector("#main")
       main.addEventListener("mousemove" ,(dets) => {
        circle.style.top=dets.y+"px"
        circle.style.left=dets.x+"px"
       })

       load=document.querySelector(".loader");
       h1=document.querySelector(".h1");
       h2=document.querySelector(".h2");
       h3=document.querySelector(".h3");

       setTimeout(function(){
        h1.style.opacity=1
       },1000)
     
       setTimeout(function(){
         h2.style.opacity=1
        },2000)
            
        setTimeout(function(){
         h3.style.opacity=1
        },3000)

       setTimeout(function(){
load.style.transform=`translateY(-100%)`
       },4000)

