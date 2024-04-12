// const details = gsap.utils.toArray(".text-frame-with-info:not(:first-child)")
// const photos = gsap.utils.toArray(".image-rectangle:not(:first-child)")

// gsap.registerPlugin(ScrollTrigger);

// gsap.set(photos, {yPercent:100, opacity:0})

// const allPhotos = gsap.utils.toArray(".image-rectangle")


// // // create
// // let mm = gsap.matchMedia();

// // // add a media query. When it matches, the associated function will run
// // mm.add("(min-width: 600px)", () => {
//   // this setup code only runs when viewport is at least 600px wide
//   ScrollTrigger.create({
// 	trigger:".explore-frames",
// 	start:"top top",
// 	end:"bottom bottom",
// 	pin:".custom-image-rectangle",
//     scrub:true,
// 	markers:true
// })

// //create scrolltrigger for each details section
// //trigger photo animation when headline of each details section
// //reaches 80% of window height

// details.forEach((detail, index)=> {
// 	let headline = detail.querySelector("h3")
// 	gsap.set(allPhotos[index] , {
// 		clipPath: function ( ) {
// 		return "inset(0px 0px 0px 0px)"
// 		}
// 		});
// 		const animation = gsap.timeline().to(photos[index], {
// clipPath: function() {
// return "inset(0px 0px 100% 0px)"
// },
// stagger : 0.5,
// ease: "none"});

// 	// let animation = gsap.timeline()
//     //     .to(photos[index], { yPercent: 0, opacity:1})
//     //     .set(allPhotos[index], {opacity:1});


// 	ScrollTrigger.create({
// 		trigger:headline,
// 		start:"top 80%",
// 		end:"top 20%",
// 		animation:animation,
// 		scrub:true,
// 		markers:true
// 	})

// })

// //});

document.addEventListener ( "DOMContentLoaded",function ( ){
	console.log("yes");
'use strict';
gsap.registerPlugin (ScrollTrigger) ;
// Lenis •Smooth, scroll
let worklnfoltems = document.querySelectorAll( '.work_photo-item' ) ;
worklnfoltems .forEach(function (item, index) {
item.style.zIndex = worklnfoltems.length - index;
});
gsap.set(".work photo-item",{
clipPath: function () {
return "inset(0px 0px 0px 0px)"
}
});
const animation = gsap.to('.work_photo-item:not(:last-child)',{
clipPath: function () {
return "inset(0px 0px 100% 0px) "
},
stagger: .5,
ease:"none"
});

ScrollTrigger.create({
	trigger : '.work' ,
	start: 'top top' ,
	end: 'bottom bottom' ,
	animation: animation,
	scrub: 1
});
});

//mobile scroll
console.clear();

const colorArray = ["#426F42", "#262626", "#36648B", "#683A5E", "#683A5E", "#36648B"];
const slides = document.querySelectorAll("section");
const container = document.querySelector("#panelWrap");
let dots = document.querySelector(".dots");
let toolTips = document.querySelectorAll(".toolTip");
let oldSlide = 0;
let activeSlide = 0;
let navDots = [];
let dur = 0.6;
let offsets = [];
let toolTipAnims = [];
let ih = window.innerHeight;
const mouseAnim = gsap.timeline({repeat:-1, repeatDelay:1});
const handAnim = gsap.timeline({repeat:-1, repeatDelay:1});
const cursorAnim = gsap.timeline({repeat:-1, repeatDelay:1});
const arrowAnim = gsap.timeline({repeat:-1, repeatDelay:1});
document.querySelector("#upArrow").addEventListener("click", slideAnim);
document.querySelector("#downArrow").addEventListener("click", slideAnim);

// create nev dots and add tooltip listeners
for (let i = 0; i < slides.length-1; i++) {
let tl = gsap.timeline({paused:true, reversed:true});
 // gsap.set(slides[i], { backgroundColor: colorArray[i] });
  let newDot = document.createElement("div");
  newDot.className = "dot";
  newDot.index = i;
  navDots.push(newDot);
  newDot.addEventListener("click", slideAnim);
  newDot.addEventListener("mouseenter", dotHover);
  newDot.addEventListener("mouseleave", dotHover);
  dots.appendChild(newDot);
  offsets.push(-slides[i].offsetTop);
  tl.to(toolTips[i], 0.25, {opacity:1, ease:Linear.easeNone});
  toolTipAnims.push(tl);
}

// icon animations for slide 1
mouseAnim.fromTo("#mouseRings circle", {attr:{r:12}}, {duration: 0.8, stagger: 0.25, attr:{r:40}});
mouseAnim.fromTo("#mouseRings circle", {opacity:0}, {duration: 0.4, stagger: 0.25, opacity:1}, 0);
mouseAnim.fromTo("#mouseRings circle", {opacity:1}, {duration: 0.4, stagger:0.25, opacity:0}, 0.4);

handAnim.to("#hand", {duration: 0.75, y:-16, rotation:5, transformOrigin:"right bottom"});
handAnim.to("#hand", {duration: 0.5, y:15, ease:"power3.inOut"});
handAnim.to("#hand", {duration: 1, y:0, rotation:0});

gsap.set("#cursor", {rotation:240, transformOrigin:"center center", x:-25});
cursorAnim.to("#cursor", 0.25, {duration: 0.25, y:-24});
cursorAnim.to("#iconCircles circle", {duration: 0.5, stagger: 0.15, attr:{r:6}}, "expand");
cursorAnim.to("#cursor", {duration: 1.1, y:50}, "expand");
cursorAnim.to("#cursor", {duration: 0.75, y:0}, "contract");
cursorAnim.to("#iconCircles circle", {duration: 0.5, attr:{r:4}}, "contract");

arrowAnim.to("#caret", {duration: 0.5, attr:{points:"30 40, 50 65, 70 40"}, repeat:3, yoyo:true, ease:"power2.inOut", repeatDelay:0.25});

// get elements positioned
gsap.set(".dots", {yPercent:-50});
gsap.set(".toolTips", {yPercent:-50});

// side screen animation with nav dots
const dotAnim = gsap.timeline({paused:true});
dotAnim.to(
  ".dot",
  {
    stagger: { each: 1, yoyo: true, repeat: 1 },
    scale: 2.1,
    rotation: 0.1,
    ease: "none"
  },
  0.5
);
dotAnim.time(1);

// tooltips hovers
function dotHover() {
  toolTipAnims[this.index].reversed() ? toolTipAnims[this.index].play() : toolTipAnims[this.index].reverse();
}

// figure out which of the 4 nav controls called the function
  function slideAnim(e) {

  oldSlide = activeSlide;
  // dragging the panels
  if (this.id === "dragger") {
    activeSlide = offsets.indexOf(this.endY);
  } else {
    if (gsap.isTweening(container)) {
      return;
    }
    // up/down arrow clicks
    if (this.id === "downArrow" || this.id === "upArrow") {
      activeSlide = this.id === "downArrow" ? (activeSlide += 1) : (activeSlide -= 1);
      // click on a dot
    } else if (this.className === "dot") {
      activeSlide = this.index;
      // scrollwheel
    } else {
      activeSlide = e.deltaY > 0 ? (activeSlide += 1) : (activeSlide -= 1);
    }
  }
  // make sure we're not past the end or beginning slide
  activeSlide = activeSlide < 0 ? 0 : activeSlide;
  activeSlide = activeSlide > slides.length - 1 ? slides.length - 1 : activeSlide;
  if (oldSlide === activeSlide) {
    return;
  }
  // if we're dragging we don't animate the container
  if (this.id != "dragger") {
    gsap.to(container, dur, { y: offsets[activeSlide], ease:"power2.inOut", onUpdate:tweenDot });
  }
}

gsap.set(".hideMe", {opacity:1});
window.addEventListener("wheel", slideAnim);
window.addEventListener("resize", newSize);

// make the container a draggable element
  let dragMe = Draggable.create(container, {
  type: "y",
  edgeResistance: 1,
  onDragEnd: slideAnim,
  onDrag: tweenDot,
  onThrowUpdate: tweenDot,
  snap: offsets,
  inertia:true,
  zIndexBoost: false,
  allowNativeTouchScrolling: false,
  bounds: "#masterWrap"
});

dragMe[0].id = "dragger";
newSize();

// resize all panels and refigure draggable snap array
function newSize() {
  offsets = [];
  ih = window.innerHeight;
  gsap.set("#panelWrap", { height: slides.length * ih });
  gsap.set(slides, { height: ih });
  for (let i = 0; i < slides.length; i++) {
    offsets.push(-slides[i].offsetTop);
  }
  gsap.set(container, { y: offsets[activeSlide] });
  dragMe[0].vars.snap = offsets;
}

// tween the dot animation as the draggable moves
  function tweenDot() {
    gsap.set(dotAnim, {
    time: Math.abs(gsap.getProperty(container, "y") / ih) + 1
  });
}



// mobile view js

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions: "restart pause resume pause",
  scroller: ".container"
});

gsap.to(".orange p", {
  scrollTrigger: ".orange", 
  duration: 2, 
  rotation: 360
});

gsap.to(".red", {
  scrollTrigger: {
    trigger: ".red",
    toggleActions: "restart pause reverse pause"
  }, 
  duration: 1, 
  backgroundColor: "#FFA500", 
  ease: "none"
});

gsap.to(".yoyo p", {
  scrollTrigger: ".yoyo", 
  scale: 2, 
  repeat: -1, 
  yoyo: true, 
  ease: "power2"
});
