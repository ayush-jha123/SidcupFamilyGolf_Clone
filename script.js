let cur = document.querySelector('.cursor')
let curb = document.querySelector('.cursor-blr')
document.addEventListener('mouseover', (element) => {
    cur.style.left = element.x - 13 + 'px'
    cur.style.top = element.y - 13 + 'px'
    curb.style.left = element.x - 150 + 'px'
    curb.style.top = element.y - 150 + 'px'
})


gsap.to("nav", {
    backgroundColor: "#000",
    height: "95px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "nav",
        scroller: "body",
        // markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub: 2 //value varry from 0-5 or true or false
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -50%",
        end: "top -100%",
        scrub: 2
    }
})

let h = document.querySelectorAll('.navitems h4')

h.forEach((element) => {
    element.addEventListener('mouseenter', () => {
        cur.style.border = '1px solid white'
        cur.style.scale = 3
        cur.style.backgroundColor = 'transparent'
    })
})

h.forEach((element) => {
    element.addEventListener('mouseleave', () => {
        cur.style.border = '0px solid white'
        cur.style.scale = 1
        cur.style.backgroundColor = '#95C11E'
    })
})

gsap.from('#about-us-in img, #about', {
    y: 90,
    opacity: 0,
    duration: 2,
    ease: 'bounce',
    // stragger:'0.1',
    scrollTrigger: {
        trigger: '#about-us-in',
        scroller: 'body',
        // markers:true,
        start: 'top 70%',
        end: 'top 55%',
        scrub: 1,
    },
});

gsap.from('#colon1', {
    y: -75,
    x: -75,
    duration: 2,
    scrollTrigger: {
        scroller: 'body',
        trigger: '#info',
        // markers:true,
        start: 'top 50%',
        end: 'top 10%',
        scrub: 2,
    }
})
gsap.from('#colon2', {
    y: 75,
    x: 75,
    duration: 2,
    scrollTrigger: {
        scroller: 'body',
        trigger: '#info',
        // markers:true,
        start: 'top 50%',
        end: 'top 10%',
        scrub: 2,
    }
})

gsap.from('.cards', {
    scale: 0.8,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        scroller: 'body',
        trigger: '.cards',
        markers: true,
        start: 'top 50%',
        end: 'top 10%',
        scrub: 2
    }
})

