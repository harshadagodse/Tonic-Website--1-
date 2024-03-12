gsap.registerPlugin(ScrollTrigger);


let t1 = gsap.timeline({
    
  scrollTrigger:{
    trigger:".team-members",
    start:"1% 50%",
    end:"120% 50%",
    markers:true,
    scrub:true,
  }
  
});
console.log("Timeline created successfully" , t1);
t1.from(".exceptional-talent-meets-hover",{
  width:"0%",
  
  
})
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