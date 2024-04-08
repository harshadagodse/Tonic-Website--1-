


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

//FOR MARQUEE tonic sound
gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();
let marquee = document.querySelector(".marquee");
let content = document.querySelector(".marquee__content");
let items = document.querySelectorAll(".marquee__item");
let tlLength = items.length * 8;

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

//FOR MARQUEE what peple are saying
gsap.registerPlugin(ScrollTrigger);

let t2 = gsap.timeline();
let marquee1 = document.querySelector(".marquee1");
let content1 = document.querySelector(".marquee__content1");
let items1 = document.querySelectorAll(".marquee__item1");
let tlLength1 = items.length * 8;

// animation timeline
t2.to(".marquee__content1", tlLength1, {
  xPercent: -100,
  repeat: -1,
  ease: "none"
});

let currentScale1 = 1;
let scaleTl2;

// scroll trigger
ScrollTrigger.create({
  markers: false,
  trigger: marquee1,
  scrub: 1,
  onUpdate: (self) => {
    console.log(self.direction)
    if (self.direction == 1) {
      isUpdated = true;
      let tScale = self.getVelocity() / 200;
      if (tScale > currentScale) {
        currentScale1 = tScale;
        scaleTl2 && scaleTl2.kill();
        scaleTl2 = gsap
          .timeline({
            deafults: {
              ease: "power2.out"
            },
            onComplete: () => {
              currentScale1 = 1;
              scaleTl2.kill();
            }
          })
          .to(t2, {
            duration: 0.1,
            timeScale: tScale,
              ease: "power2.out"
          })
          .to(
            t2,
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

// Lines

console.clear(); // Start with a clean console on refesh

const leftLines = document.querySelectorAll(".border-line-btm");

leftLines.forEach((leftLine) => {
  if(leftLine.classList.contains('right')){
    console.warn('right');
    gsap.set(leftLine,{xPercent:-100})
    
  } else{
    gsap.set(leftLine,{xPercent:100})
    
  }

  
  const leftAnimationSettings = {
    duration: 2,
    xPercent: 0,
    ease: "power3.out",
    transformOrigin: "left"
  };

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: leftLine,
      start: "top top+=200px",
      markers: true
    }
  });

  tl.to(leftLine, leftAnimationSettings);
});


// Line
TweenLite.defaultEase = Linear.easeNone;


//show the square only once js has run
//visibility set to hidden in css panel
TweenLite.set(".square", {visibility:"visible"});



var t4 = new TimelineLite();
t4.fromTo(".l1", 1, {height:0}, {height:200})
.fromTo(".l2", 4, {width:0, backgroundColor:"red"}, {width:200, backgroundColor:"blue"})
  .fromTo(".l3", 1, {height:0}, {height:200})
  .fromTo(".l4", 1, {width:0}, {width:200})

t4.timeScale(4) //play faster

// TweenLite.defaultEase = Linear.easeNone;


// //show the square only once js has run
// //visibility set to hidden in css panel
// TweenLite.set(".square", {visibility:"visible"});



// var t3 = new TimelineLite();
// t3.fromTo(".l1", 1, {height:0}, {height:200})
// .fromTo(".l2", 4, {width:0, backgroundColor:"red"}, {width:200, backgroundColor:"blue"})
//   .fromTo(".l3", 1, {height:0}, {height:200})
//   .fromTo(".l4", 1, {width:0}, {width:2000})

// t3.timeScale(1) //play faster


gsap.utils.toArray(".line").forEach(line => {
  gsap.from(line, {
    scaleX: 0,
    duration: 2,
    transformOrigin: "center center",
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: line,
      start: "top 80%",
   
      toggleActions: "play none none reverse",
        // markers:true
    }
  });
});
// Create a timeline
// const timeline2 = gsap.timeline();

// // Iterate over each ".line" element
// gsap.utils.toArray(".line").forEach(line => {
//   // Add animations to the timeline
//   timeline2.from(line, {
//     scaleX: 0,
//     duration: 2,
//     transformOrigin: "center center",
//     ease: "power2.inOut",
//     scrollTrigger: {
//       trigger: line,
//       start: "top 80%",
//       toggleActions: "play none none reverse"
//     }
//   })
//   // Add another animation to the same timeline
//   .to(line, {
//     opacity: 2,
//     duration: 1,
//     delay: 1 // Add a delay after the previous animation
//   });
// });
// const timeline3 = gsap.timeline();

// // Iterate over each ".line" element
// gsap.utils.toArray(".line2").forEach(line2 => {
//   // Add animations to the timeline
//   timeline3.from(line2, {
//     scaleX: 0,
//     duration: 2,
//     transformOrigin: "center center",
//     ease: "power2.inOut",
//     scrollTrigger: {
//       trigger: line2,
//       start: "top 80%",
//       toggleActions: "play none none reverse"
//     }
//   })
//   // Add another animation to the same timeline
//   .to(line2, {
//     opacity: 2,
//     duration: 2,
//     delay: 1// Add a delay after the previous animation
//   });
// });





const timeline = gsap.timeline();

// Iterate over each ".verticalline" element
gsap.utils.toArray(".verticalline").forEach(verticalline => {
  // Add animations to the timeline
  timeline.from(verticalline, {
    scaleY: 0, // Change scaleX to scaleY
    duration: 2,
    transformOrigin: "top center",
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: verticalline,
      start: "top 90%",
      toggleActions: "play none none reverse",
      // markers: true
    }
  })
  // Add another animation to the same timeline
  .to(verticalline, {
    opacity: 1, // Change opacity to 1
    duration: 2,
    delay: 1 // Add a delay after the previous animation
  });
});

const timeline1 = gsap.timeline();

// Iterate over each ".verticalline" element
gsap.utils.toArray(".verticalline1").forEach(verticalline1 => {
  // Add animations to the timeline
  timeline1.from(verticalline1, {
    scaleY: 0, // Change scaleX to scaleY
    duration: 2,
    transformOrigin: "top center",
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: verticalline1,
      start: "top 90%",
      toggleActions: "play none none reverse",
      // markers: true
    }
  })
  // Add another animation to the same timeline
  .to(verticalline1, {
    opacity: 1, // Change opacity to 1
    duration: 2,
    delay: 1 // Add a delay after the previous animation
  });
});


gsap.utils.toArray(".line1").forEach(line1 => {
  gsap.from(line1, {
    scaleX: 0,
    duration: 2,
    transformOrigin: "center center",
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: line1,
      start: "top 90%",
      // end: "bottom bottom",
   
      toggleActions: "play none none reverse",
        // markers:true
    }
  });
});
