gsap.registerPlugin(ScrollTrigger);

const bgVvideo = document.querySelector("#bgVideo");

bgVideo.pause();
bgVideo.currentTime = 0;

let sections = gsap.utils.toArray(".step");
sections.forEach((step, i) => {

    ScrollTrigger.create({
        trigger: step,
        start: "bottom bottom",
        end: `+=${window.innerHeight}`,
        pin: true,
        anticipatePin: 1,
        scrub:4
    });

    gsap.fromTo(bgVideo, { currentTime: 3 * i }, {
        scrollTrigger: {
            trigger: step,
            scrub: 2,
            start: "top bottom",
            end: "bottom bottom",
        },
        currentTime: 3 * (i + 1),
        duration: 2,
        ease: "none",

    });

});

gsap.to("#bgVideo", {
    scrollTrigger: {
        scrub: true
    },
    scale: 1.5
})