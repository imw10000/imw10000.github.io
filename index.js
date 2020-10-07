let firstSight = 1593052920
let timer1 = document.querySelector('.timer1')
let timer2 = document.querySelector('.timer2')
let now = parseInt(new Date().getTime() / 1000)
let through = now - firstSight
let d = parseInt(through / (3600 * 24))
timer2.innerHTML = `${d}天`

function forever() {
	let now = parseInt(new Date().getTime() / 1000)
	let through = now - firstSight
	let y = parseInt(through / 31536000)
	let m = parseInt((through % 31536000) / 2678400)
	let d = parseInt((through % 31536000) % 2678400 / 86400)
	let h = parseInt((through % 31536000) % 2678400 % 86400 / 3600)
	let mm = parseInt((through % 31536000) % 2678400 % 86400 % 3600 / 60)
	let s = parseInt((through % 31536000) % 2678400 % 86400 % 3600 % 60)
	timer1.innerHTML = `${y == 0 ? '' : y + '年'}${m}月${d}天${h}时${mm}分${s}秒`
	setTimeout(forever, 1000)
}
forever()
