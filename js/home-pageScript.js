
window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var animationDuration = 20 + scrollPosition * 0.01; // Adjust the factor as needed
  document.querySelector('.tonic-the-sound').style.animationDuration = animationDuration + 's';
});
// document.querySelector('.tonic-the-sound').addEventListener('mouseenter', function() {
//   this.classList.add('hover-slow');
// });

// document.querySelector('.tonic-the-sound').addEventListener('mouseleave', function() {
//   this.classList.remove('hover-slow');
// });

// window.addEventListener('scroll', function() {
//   var scrollPosition = window.scrollY;
//   var animationDuration = 20 + scrollPosition * 0.01; // Adjust the factor as needed
//   document.querySelector('.scrolling-text').style.animationDuration = animationDuration + 's';
// });

window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var animationDuration = 5 + scrollPosition * 0.01; // Adjust the factor as needed
  document.querySelector('.scrolling-text').style.animationDuration = animationDuration + 's';
});

// document.querySelector('.scrolling-text').addEventListener('mouseenter', function() {
//   this.classList.add('hover-slow');
// });

// document.querySelector('.scrolling-text').addEventListener('mouseleave', function() {
//   this.classList.remove('hover-slow');
// });

document.addEventListener('DOMContentLoaded', function() {
  const frameContainer = document.querySelector('.frame-container');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
      frameContainer.classList.add('scrolled');
    } else {
      frameContainer.classList.remove('scrolled');
    }
  });
});

gsap.config({ trialWarn: false });
console.clear();
gsap.registerPlugin(ScrollTrigger, SplitText);
const split = new SplitText("p", { type: "lines" });
console.log("split.lines", split.lines);
split.lines.forEach((target) => {
  gsap.to(target, {
    backgroundPositionX: 0,
    ease: "none",
    scrollTrigger: {
      trigger: target,
      // markers: true,
      scrub: 1,
      start: "top center",
      end: "bottom center"
    }

  });
});



  const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollTrigger.normalizeScroll(true)

// create the smooth scroller FIRST!
let smoother = ScrollSmoother.create({
  smooth: 2,
  effects: true,
  normalizeScroll: true
});

// pin box-c when it reaches the center of the viewport, for 300px
ScrollTrigger.create({
  trigger: ".smooth-content",
  pin: true,
  start: "center center",
  end: "+=300",
  markers: true
});

document.querySelector("button").addEventListener("click", e => {
  // scroll to the spot where .box-c is in the center.
  // parameters: element, smooth, position
  smoother.scrollTo(".smooth-content", true, "center center");
  
  // or you could animate the scrollTop:
  // gsap.to(smoother, {
  //  scrollTop: smoother.offset(".box-c", "center center"),
  //  duration: 1
  // });
});


