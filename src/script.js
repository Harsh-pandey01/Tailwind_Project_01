const slider = document.querySelector('#companies-container')
const slider2 = document.querySelector('#companies-container2')


gsap.to(slider, {
  duration: 1,
  x: -100,
  scrollTrigger: {
    trigger: slider,   // element that triggers the animation
    start: "top 80%",  // when top of slider reaches 80% of viewport
    end: "bottom 20%", // optional
    scrub: true,       // link animation to scroll
   
  }
},'a');

gsap.to(slider2, {
  duration: 1,
  x: 10,
  scrollTrigger: {
    trigger: slider,   // element that triggers the animation
    start: "top 80%",  // when top of slider reaches 80% of viewport
    end: "bottom 20%", // optional
    scrub: true,       // link animation to scroll

  }
},'a');
