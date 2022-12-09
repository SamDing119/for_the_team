        gsap.to("#W1",
        {
            x: -1100,
            scrollTrigger:
            {
             start: "10% 15%",
             end: "30% 20%",
             scrub: true,
             markers: false,
            }
        })

        gsap.to("#W2",
        {
            x: 1100,            
            scrollTrigger:
            {
             start: "10% 15%",
             end: "30% 20%",
             scrub: true,
            }
        })

        gsap.to("#GN",
        {
            scale: 1.1,
            y: 98,
            scrollTrigger:
            {
             start: "10% 15%",
             end: "30% 20%",
             scrub: true,
            }
        })

        gsap.to("#Boy",
        {
            scale: 0.6,
            x: 80,
            y: 130, 
            //Transformorigin:"100% 100%",
            trigger: "#Boy",
            scrollTrigger:
            {
             start: "10% 15%",
             end: "30% 20%",
             scrub: true,
            }
        })       

        gsap.to("#WW3",
        {
            x: -500,
            scrollTrigger:
            {
             start: "10% 15%",
             end: "30% 20%",
             scrub: true,
            }
        })

        gsap.to("#HD",
        {
            scale: 0.9,
            x: -150,
            opacity:1,
            scrollTrigger:
            {
             start: "15% 15%",
             end: "30% 20%",
             scrub: true,
            }
        })       

        gsap.to("#title",
        {
            scale: 0.8,
            y: 150,
            scrollTrigger:
            {
             start: "10% 15%",
             end: "30% 20%",
             scrub: true,
            }
        })