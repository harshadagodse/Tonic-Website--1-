// const scroll = new LocomotiveScroll({
//     el: document.querySelector("#studio"),
// smooth: true,
// lerp:0.1,
// tablet: { smooth: true },
// smartphone: { smooth: true }
// });

const details = gsap.utils.toArray(".text-frame-with-info:not(:first-child)")
const photos = gsap.utils.toArray(".image-rectangle:not(:first-child)")

gsap.registerPlugin(ScrollTrigger);

gsap.to(".text p", {
  backgroundPositionX: "0%",
  stagger: 1,
  scrollTrigger: {
    trigger: ".text",
    markers: true,
    scrub: 1,
    start: "top center",
    end: "bottom center"
  }
});
gsap.to(".text1 p", {
    backgroundPositionX: "0%",
    stagger: 1,
    scrollTrigger: {
      trigger: ".text1",
      markers: true,
      scrub: 1,
      start: "top center",
      end: "bottom center"
    }
  });

  gsap.to(".text2 p", {
    backgroundPositionX: "0%",
    stagger: 1,
    scrollTrigger: {
      trigger: ".text2",
      markers: true,
      scrub: 1,
      start: "top center",
      end: "bottom center"
    }
  });
  

gsap.set(photos, {yPercent:101})

const allPhotos = gsap.utils.toArray(".image-rectangle")


// create
let mm = gsap.matchMedia();

// add a media query. When it matches, the associated function will run
mm.add("(min-width: 600px)", () => {

  // this setup code only runs when viewport is at least 600px wide
  console.log("desktop")
	
  ScrollTrigger.create({
	trigger:".explore-frames",
	start:"top top",
	end:"bottom bottom",
	pin:".custom-image-rectangle",
    scrub:true,
	markers:true
})

//create scrolltrigger for each details section
//trigger photo animation when headline of each details section 
//reaches 80% of window height
details.forEach((detail, index)=> {

	let headline = detail.querySelector("h3")
    console.log(headline);
    console.log(photos[index]);
	let animation = gsap.timeline()
       .to(photos[index], { autoAlpha: 1 }) 
        .to(photos[index], { yPercent: 0 }, 0.1)
        .set(allPhotos[index], {autoAlpha:0});
	ScrollTrigger.create({
		trigger:headline,
		start:"top 80%",
		end:"top 20%",
		animation:animation,
		scrub:true,
		markers:true
	})
    // gsap.fromTo(heading, 
    //     {opacity: 0},
    //     {
    //      opacity: 1,
    //      ease: 'power1.inOut',
    //      scrollTrigger: {
    //          trigger: sections[i],
    //          pin: 'main',
    //        pinnedContainer: "main",
    //          start: 'center center',
    //          end: `+=${i + 1}00%`,
    //          scrub: true,
    //      },
    //  })
})
	
	
  
  return () => { // optional
    // custom cleanup code here (runs when it STOPS matching)
	  console.log("mobile")
  };
});