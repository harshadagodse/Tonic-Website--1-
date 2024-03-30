
window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var animationDuration = 20 + scrollPosition * 0.01; // Decrease the animation duration as you scroll down
  document.querySelector('.tonic-the-sound').style.animationDuration = animationDuration + 's';
});

window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var animationDuration = 20 + scrollPosition * 0.01; // Decrease the animation duration as you scroll down
  document.querySelector('.get-in-touch-scroller').style.animationDuration = animationDuration + 's';
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
  document.querySelector('.scrolling-text').style.animationDuration = animationDuration+ 's';
});

// document.querySelector('.scrolling-text').addEventListener('mouseenter', function() {
//   this.classList.add('hover-slow');
// });

// document.querySelector('.scrolling-text').addEventListener('mouseleave', function() {
//   this.classList.remove('hover-slow');
// });

// document.addEventListener('DOMContentLoaded', function() {
//   const frameContainer = document.querySelector('.frame-container');

//   window.addEventListener('scroll', function() {
//     if (window.scrollY > 0) {
//       frameContainer.classList.add('scrolled');
//     } else {
//       frameContainer.classList.remove('scrolled');
//     }
//   });
// });

// gsap.config({ trialWarn: false });
// console.clear();
// gsap.registerPlugin(ScrollTrigger, SplitText);
// const split = new SplitText("p", { type: "lines" });
// console.log("split.lines", split.lines);
// split.lines.forEach((target) => {
//   gsap.to(target, {
//     backgroundPositionX: 0,
//     ease: "none",
//     scrollTrigger: {
//       trigger: target,
//       // markers: true,
//       scrub: 1,
//       start: "top center",
//       end: "bottom center"
//     }

//   });
// });



  const lenis = new Lenis()

lenis.on('scroll', (e) => {
  // console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)



gsap.registerPlugin(ScrollTrigger)

const splitTypes = document.querySelectorAll('.team-members')

splitTypes.forEach((char,i) => {

    const bg = char.dataset.bgColor
    const fg = char.dataset.fgColor

    const text = new SplitType(char, { types: 'chars'})

    gsap.fromTo(text.chars,
        {
            color: bg,
        },
        {
            color: fg,
            duration: 0.3,
            stagger: 1.5,
            scrollTrigger: {
                trigger: char,
                start: 'top 80%',
                end: 'top 20%',
                scrub: true,
                markers: false,
                toggleActions: 'play play reverse reverse'
            }
    })
})








