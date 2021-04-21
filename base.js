
console.log('Змикання по суті функція всередині іншої функції')

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


console.log('------------------------------'); console.log('');console.log('');

	