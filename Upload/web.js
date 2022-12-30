gsap.to("#W1",
    {
        x: -1100,

        scrollTrigger:
        {
            trigger: "#title",
            start: "top 10px",
            end: "bottom 20px",
            scrub: true,
            markers: true,
        }
    })

gsap.to("#W2",
    {
        x: 1100,
        scrollTrigger:
        {
            trigger: "#title",
            start: "top 10px",
            end: "bottom 20px",
            scrub: true,
            markers: true,
        }
    })

gsap.to("#GN",
    {
        scale: 1.1,
        y: 90,
        scrollTrigger:
        {
            trigger: "#title",
            start: "top 10px",
            end: "bottom 20px",
            scrub: true,
            markers: true,
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
            start: "20% 30%",
            end: "30% 20%",
            scrub: true,
            markers: true,
        }
    })

gsap.to("#WW3",
    {
        x: -500,
        scrollTrigger:
        {
            trigger: "#title",
            start: "top 10px",
            end: "bottom 20px",
            scrub: true,
            markers: true,
        }
    })

gsap.to("#top",
    {
        scale: 0.9,
        x: -150,
        opacity: 1,
        scrollTrigger:
        {
            trigger: "#title",
            start: "top 10px",
            end: "bottom 20px",
            scrub: true,
            markers: true,
        }
    })

gsap.to("#title",
    {
        scale: 0.8,
        y: 150,
        scrollTrigger:
        {
            trigger: "#title",
            start: "top 10px",
            end: "bottom 20px",
            scrub: true,
            markers: true,
        }
    })
ScrollTrigger.matchMedia({
    // 跟設定css 一樣  如果畫面不小於 992px 執行
    "(min-width: 992px)": () => { 執行內容 },
    // 畫面不小於 768px 執行
    "(min-width: 768px)": () => { 執行內容 },
    // 不管畫面大小，我都執行
    "all": () => { 執行內容 },
});