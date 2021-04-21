
console.log('Змикання по суті функція всередині іншої функції')

function urlGenerator(domain) {
	return function(url) {
		return `https://${url}.${domain}`
	}
}
const comUrl = urlGenerator('com') // com замкнута
const netUrl = urlGenerator('net') // net замкнута
console.log("comUrl('google')", comUrl('google'));
console.log("netUrl('google')", netUrl('google'));


console.log('------------------------------'); console.log('');console.log('');

	