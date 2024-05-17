gsap.registerPlugin(ScrollTrigger) 

const towns = document.querySelector(".sections")
let townsWidth = towns.offsetWidth

let amountScroll = townsWidth - window.innerWidth

let card1 = document.querySelector(".card1")
let card2 = document.querySelector(".card2")
let card3 = document.querySelector(".card3")
let card4 = document.querySelector(".card4")

const tlCard = gsap.timeline({defaults: {duration:2,
    ease:"power.inOut"}})

tlCard.from(card1, {
    x:500,
    y:300,
    rotationZ:8
})
    .from(card2, {
        x:300,
        y:280,
        rotationZ:8
    })
    .from(card3, {
        x:100,
        y:260,
        rotationZ:8
    })
    .from(card4, {
        x:-100,
        y:240,
        rotationZ:8
    })

const tween = gsap.to(towns, {
    x: -amountScroll,
    duration: 3,
    ease: "none"
})

ScrollTrigger.create({
	trigger:".horizontal-wrapper",
	start:"top top",
	end: "+=" + amountScroll ,
	markers:true,
	pin:true,
	animation:tween,
	scrub:1
})

ScrollTrigger.create({
    trigger:".scroll-wrapper",
    start:"top top",
    end:"bottom 50%",
    markers:true,
    pin:true,
    animation:tlCard,
    scrub:1
})





