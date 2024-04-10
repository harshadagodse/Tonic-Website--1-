
const bg = document.querySelector(".bg");
const conWrapper = document.querySelector(".profile");
const sections = gsap.utils.toArray('section');


ScrollTrigger.defaults({
  scroller: conWrapper,
  toggleActions: "restart reset restart reset"
});

sections.forEach((section) => {
  gsap.from('frame-explore', {
    scrollTrigger: {
      trigger: section,
      start: 'top top'
    },
    y: 200,

  });
});