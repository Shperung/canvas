
console.log('Змикання виникає коли ми з оннієї функції повертаємо іншу функцію')
console.log('тоді кажемо що нова функція замкнута на область видимості батьківської')

function urlGenerator(domain) {
	return function(url) {
		return `https://${url}.${domain}`
	}
}
const comUrl = urlGenerator('com') // com замкнута
const netUrl = urlGenerator('net') // net замкнута
console.log("https://google.com", comUrl('google'));
console.log("https://google.net", netUrl('google'));

console.log(urlGenerator('biz')('apple')) //https://apple.biz
console.log('');

function counter() {
	let count = 0
	return function() {
		return ++count
	}
}
const useConunter = counter()
console.log('useConunter', useConunter());
console.log('useConunter2', useConunter());

console.log('------------------------------'); console.log('');console.log('');

	