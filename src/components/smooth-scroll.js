'use strict'

window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame

const Quad_easeIn = (t, b, c, d) => c * ((t = t / d - 1) * t * t + 1) + b

//  滚动到具体位置
const scrollTo = (end, time = 800) => {
	let scrollTop = window.pageYOffset || document.documentElement.scrollTop
	let b = scrollTop
	let c = end - b
	let d = time
	let start = null

	return new Promise((resolve, reject) => {
		function step(timeStamp) {
			if (start === null) start = timeStamp
			let progress = timeStamp - start
			if (progress < time) {
				let st = Quad_easeIn(progress, b, c, d)
				document.body.scrollTop = st
				document.documentElement.scrollTop = st
				window.requestAnimationFrame(step)
			}
			else {
				document.body.scrollTop = end
				document.documentElement.scrollTop = end
				resolve(end)
			}
		}
		window.requestAnimationFrame(step)
	})
}

//  滚动到顶部
const scrollToTop = (time) => {
	time = typeof time === 'number' ? time : 800
	return scrollTo(0, time)
}

//  滚动到某元素
const scrollToElem = (elem, time, offset) => {
	let top = elem.getBoundingClientRect().top  + ( window.pageYOffset || document.documentElement.scrollTop )  - ( document.documentElement.clientTop || 0 )
	return scrollTo(top - (offset || 0), time)
}

let README = `
scrollToTop:     滚动到顶部, param ([time: 800]),
scrollToElem:    滚动到某元素 param (elem, [time: 800]),
scrollTo:        滚动到某位置 param (number, [time: 800])
`
export default {
	methods: {
		scrollToTop,
		scrollToElem,
		scrollTo
	}
}