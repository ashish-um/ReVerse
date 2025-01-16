


    const lenis = new Lenis({
        duration: 1.4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
        direction: 'vertical', // vertical, horizontal
        gestureDirection: 'vertical', // vertical, horizontal, both
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 1,
        infinite: false,
    })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)


    gsap.registerPlugin(ScrollTrigger);

    
    gsap.to(".video-section", {
        yPercent: -100, 
        ease: "none",
        scrollTrigger: {
        trigger: ".orange-bg",
        start: "bottom top",
        end: "+=100%",
        pinSpacing:false,
        scrub: true,
        // pin: true,
        //  markers:true
    }});
    
    

    gsap.to(".sticky-section", {
        yPercent:-100,
        scrollTrigger: {
        trigger: ".sticky-section",
        start: "top bottom", // Start when the top of the section hits the bottom of the viewport
        end: "", // End when the bottom of the section hits the bottom of the viewport
        pin: true, // Stick the section
        scrub: true, // Smooth scrolling
        pinSpacing:true,
        // markers:true
    }
    });



