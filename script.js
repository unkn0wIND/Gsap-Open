let timeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".main",
        start: "50% 50%",
        end: "100% 50%",
        scrub: 2,
        pin: true
    }
})

timeline.to(".top", {
    top:"-50%"
}, 'a')

timeline.to(".bottom", {
    bottom:"-50%"
}, 'a')

timeline.to(".top-h", {
    top:"80%"
}, 'a')

timeline.to(".bottom-h", {
    bottom:"-80%"
}, 'a')

timeline.to(".content", {
    marginTop:"0%"
}, 'a')