gsap.registerPlugin(ScrollTrigger);

const container = document.querySelector(".container");
const sections = gsap.utils.toArray(".container section");
const mask = document.querySelector(".mask");

console.log(sections);
ScrollTrigger.config({
    limitCallbacks: true,
    ignoreMobileResize: true
  });


let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    // end: "+=3000",
    end: () => "+=" + document.querySelector(".container").offsetWidth,
    snap: 1 / (sections.length - 1),
    markers: false,
  }
});

gsap.to(mask, {
  width: "100%",
  scrollTrigger: {
    trigger: ".wrapper",
    start: "top left",
    scrub: 1,
    markers:false,
    opacity:0
  }
});

//Progress bar animation

