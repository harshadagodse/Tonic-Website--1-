// gsap.registerPlugin(ScrollTrigger);


// let t1 = gsap.timeline({
    
//   scrollTrigger:{
//     trigger:".team-members",
//     start:"1% 50%",
//     end:"120% 50%",
//     markers:true,
//     scrub:true,
//   }
  
// });
// console.log("Timeline created successfully" , t1);
// t1.from(".exceptional-talent-meets-hover",{
//   width:"0%",
  
  
// })

// document.addEventListener("DOMContentLoaded",()=>{
//   gsap.registerPLugin(ScrollTrigger);
//   new SplitType(".team-members",{
//     types:"words"
//   });
//   $(".word").append("<div class='exceptional-talent-meets-hover'></div>");
//   createAnimation();
// })
// function createAnimation() {
//   let allMasks= $("..word").map(function(){
//     return $(this).find((".exceptional-talent-meets-hover"));
//     }).get();
  
// }
let t1 = gsap.timeline({
    
  scrollTrigger:{
    trigger:".team-members",
    start:"top 50%",
    end:"bottom 50%",
    markers:true,
    scrub:1,
  },
  
});
console.log("Timeline created successfully" , t1);
t1.to(".exceptional-talent-meets-hover",{
  width:"100%",
  
  
  
})
gsap.registerPlugin(ScrollTrigger);

gsap.to(".text p", {
  backgroundPositionX: "200%",
  stagger: 1,
  scrollTrigger: {
    trigger: ".text",
    markers: true,
    scrub: 1,
    start: "1% 50%",
    end: "120% 50%",
  }
});





// gsap.registerPlugin(ScrollTrigger);

// let t1 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".team-members",
//     start: "1% 50%",
//     end: "120% 50%",
//     scrub: 1
//   }
// });

// t1.to(".exceptional-talent-meets-hover", {
//   width: "100%"
// });