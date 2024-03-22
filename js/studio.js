const details = gsap.utils.toArray(".text-frame-with-info:not(:first-child)")
const photos = gsap.utils.toArray(".image-rectangle:not(:first-child)")

gsap.registerPlugin(ScrollTrigger);  

gsap.set(photos, {yPercent:100, opacity:0})

const allPhotos = gsap.utils.toArray(".image-rectangle")


// // create
// let mm = gsap.matchMedia();

// // add a media query. When it matches, the associated function will run
// mm.add("(min-width: 600px)", () => {
  // this setup code only runs when viewport is at least 600px wide
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
	let animation = gsap.timeline()
        .to(photos[index], { yPercent: 0, opacity:1})
        .set(allPhotos[index], {opacity:1});
    
	ScrollTrigger.create({
		trigger:headline,
		start:"top 80%",
		end:"top 20%",
		animation:animation,
		scrub:true,
		markers:true
	})

})

//});


