
window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var animationDuration = 20 + scrollPosition * 0.01; // Decrease the animation duration as you scroll down
  document.querySelector('.tonic-the-sound').style.animationDuration = animationDuration + 's';
});

//conact page scroll text
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
});

//FOR MARQUEE
gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();
let marquee = document.querySelector(".marquee");
let content = document.querySelector(".marquee__content");
let items = document.querySelectorAll(".marquee__item");
let tlLength = items.length * 2;

// animation timeline
tl.to(".marquee__content", tlLength, {
  xPercent: -100,
  repeat: -1,
  ease: "none"
});

let currentScale = 1;
let scaleTl;

// scroll trigger
ScrollTrigger.create({
  markers: false,
  trigger: marquee,
  scrub: 1,
  onUpdate: (self) => {
    console.log(self.direction)
    if (self.direction == 1) {
      isUpdated = true;
      let tScale = self.getVelocity() / 200;
      if (tScale > currentScale) {
        currentScale = tScale;
        scaleTl && scaleTl.kill();
        scaleTl = gsap
          .timeline({
            deafults: {
              ease: "power2.out"
            },
            onComplete: () => {
              currentScale = 1;
              scaleTl.kill();
            }
          })
          .to(tl, {
            duration: 0.1,
            timeScale: tScale,
              ease: "power2.out"
          })
          .to(
            tl,
            {
              timeScale: 1,
              duration: 0.5,
              ease: "none"
            },
            "+=0.3"
          );
      }
    }
  }
});


//Menu
var navigation = new TimelineLite({paused:true, reversed:true});
navigation.to("#navigationWrap", 0.5, {opacity: 1, display: 'block'})
          .to(".navbar", 0.3, {opacity: 0}, "-=0.1")
          .to(".close", 0.3, {display: "block", opacity: 1}, "-=0.1")
          .from(".menu", 0.5, {opacity: 0, y: 30})
          .from(".social", 0.5, {opacity: 0});

$(".navbar, .close").click (function() {
  console.log("clicked");
  navigation.reversed() ? navigation.play() : navigation.reverse();
  if ($('navigationWrap').hasClass('menu-open')) {
    $('navigationWrap').removeClass('menu-open');
  } else {
    $('navigationWrap').addClass('menu-open');
  }
});