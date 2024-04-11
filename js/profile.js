

gsap.registerPlugin(ScrollTrigger);

let currentIndex = 0;
let animating;
let swipePanels = gsap.utils.toArray(".swipe-section .panel");

// set z-index levels for the swipe panels
let reversedPanels = [...swipePanels].reverse();
reversedPanels.forEach((panel, index) => {
  gsap.set(panel, { zIndex: index });
});

// create an observer and disable it to start
let intentObserver = ScrollTrigger.observe({
  type: "wheel,touch",
  onUp: () => !animating && gotoPanel(currentIndex - 1, false),
  onDown: () => !animating && gotoPanel(currentIndex + 1, true),
  tolerance: 10,
  preventDefault: true
});
intentObserver.disable();

// handle the panel swipe animations
function gotoPanel(index, isScrollingDown) {
  animating = true;
  // return to normal scroll if we're at the end or back up to the start
  if ((index === swipePanels.length && isScrollingDown) || (index === -1 && !isScrollingDown)) {
    intentObserver.disable();
    return;
  }

  let target = isScrollingDown ? swipePanels[currentIndex] : swipePanels[index];
  gsap.to(target, {
    yPercent: isScrollingDown ? -100 : 0,
    duration: 0.75,
    onComplete: () => (animating = false)
  });

  currentIndex = index;
}

// pin swipe section and initiate observer
ScrollTrigger.create({
  trigger: ".swipe-section",
  pin: true,
  start: "top top",
  onEnter: () => {
    intentObserver.enable();
    gotoPanel(currentIndex + 1, true);
  },
  onEnterBack: () => {
    intentObserver.enable();
    gotoPanel(currentIndex - 1, false);
  }
});
console.log(1);
// horizontal scrolling section 
let horizontalSections = document.querySelectorAll(".horizontal .panel");
gsap.to(horizontalSections, {
  xPercent: -100 * (horizontalSections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: '.horizontal',
    pin: true,
    scrub: 1,
    end: "+=3500"
  }
});
