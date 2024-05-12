gsap.registerPlugin(ScrollTrigger) 

const towns = document.querySelector(".sections")
let townsWidth = towns.offsetWidth

let amountScroll = townsWidth - window.innerWidth
console.log(amountScroll)

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





