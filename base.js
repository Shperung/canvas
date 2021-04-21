console.groupCollapsed('ЗАМИКАННЯ')
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

function counter() {
	let count = 0
	return function() {
		return ++count
	}
}
const useConunter = counter()
console.log('useConunter', useConunter());
console.log('useConunter2', useConunter());
console.groupEnd();
console.log('------------------------------');

console.group('КОНТЕКСТ')

function outputThis() {
	console.log('this', this)
}
outputThis() // Window{...}

const person = {
	name: 'Viktor',
	age: 33,
	sayHello: outputThis,
	sayHelloWindow: outputThis.bind(window), // в bind передали контекст
	logInfo: function() {
		console.log('logInfo name', this.name)
	},
}
person.sayHello() // {name: "Viktor", age: 33, sayHello: ƒ}
person.sayHelloWindow() // Window{...}
person.logInfo() // Viktor

const cat = {
	name: 'Murzik',
	age: 1
}

const catPerson = person.logInfo.bind(cat)
catPerson() // Murzik

console.groupEnd();
console.log('------------------------------');

	