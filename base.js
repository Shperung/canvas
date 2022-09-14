console.groupCollapsed('ЗАМИКАННЯ closure');
// https://www.youtube.com/watch?v=L2PSRa2JM9A
console.log(
  'Ми зробили функцію - вона виконалась і змінні всередині здохли',
  'щоб не дохли можна їх замкнути',
  'Змикання виникає коли ми з оннієї функції повертаємо іншу функцію - i можна повернути змінні які не здохають'
);
console.log(
  'тоді кажемо що нова функція замкнута на область видимості батьківської'
);

function urlGenerator(domain) {
  return function (url) {
    return `https://${url}.${domain}`;
  };
}
const comUrl = urlGenerator('com'); // com замкнута
const netUrl = urlGenerator('net'); // net замкнута
console.log('https://google.com', comUrl('google'));
console.log('https://google.net', netUrl('google'));

console.log(urlGenerator('biz')('apple')); //https://apple.biz

function counter() {
  let count = 0;
  return function () {
    return ++count;
  };
}
const useConunter = counter();
console.log('useConunter', useConunter());
console.log('useConunter2', useConunter());
console.groupEnd();
console.log('------------------------------');

console.groupCollapsed('КОНТЕКСТ');
// https://www.youtube.com/watch?v=L2PSRa2JM9A
console.log(
  'кожна функція це обєкт - і має 3 методи call, applay, bind Якщо звернутись через точку'
);
console.log(
  'call, applay - то саме тільки з різним синтаксисом - викликають функцію відразу'
);

function outputThis() {
  console.log('this', this);
}
outputThis(); // Window{...}

const person = {
  name: 'Viktor',
  age: 33,
  sayHello: outputThis,
  sayHelloWindow: outputThis.bind(window), // в bind передали контекст
  logInfo: function () {
    console.log('logInfo name', this.name);
  },
};
person.sayHello(); // {name: "Viktor", age: 33, sayHello: ƒ}
person.sayHelloWindow(); // Window{...}
person.logInfo(); // Viktor

const cat = {
  name: 'Murzik',
  age: 1,
};

const catPerson = person.logInfo.bind(cat);
catPerson(); // Murzik

console.groupEnd();
console.log('------------------------------');

console.groupCollapsed('CALL. APPLY');
// https://www.youtube.com/watch?v=L2PSRa2JM9A

function testCall(arg0, arg1) {
  console.log(
    'testCall.call() - відразу викликало функцію - з передвним контекстом і параметрами',
    this,
    arg0,
    arg1
  );
}
function testApply(arg0, arg1) {
  console.log(
    'testApply.apply() - відразу викликало функцію з передвним контекстом і [параметрами через масив]',
    this,
    arg0,
    arg1
  );
}

testCall.call({a: 1}, 1, 2);
testApply.apply({a: 1}, [1, 2]);

console.groupEnd();
console.log('------------------------------');

console.group('__proto__');
console.log('У любго обєкта є  __proto__');
console.log('__proto__ це обєкт');
let obj = {};
console.log('%c ||||| obj.__proto__', 'color:yellowgreen', obj.__proto__);
let arr = [];
console.log('%c ||||| arr.__proto__', 'color:yellowgreen', arr.__proto__);
let promice = new Promise(() => {});
console.log(
  '%c ||||| promice.__proto__',
  'color:yellowgreen',
  promice.__proto__
);

class CTest {}
let klass = new CTest();
console.log('%c ||||| klass.__proto__', 'color:yellowgreen', klass.__proto__);

let obj1 = {},
  obj2 = {};
const isSame__proto__ = obj1.__proto__ === obj2.__proto__;
console.log('%c ||||| isSame__proto__', 'color:yellowgreen', isSame__proto__);
console.log('');
console.log('prototype є у class || function');
console.log('prototype це обєкт');
console.log(
  '__proto__ любого обєкта посилається на prototype класа(функції конструктора), з допомогою якого цей обєкт був свторений new Array'
);
console.log('%c ||||| klass.prototype', 'color:yellowgreen', klass.prototype);

console.log('**');
console.log(
  '%c ||||| obj.prototype - нема тому що prototype є у class || function',
  'color:yellowgreen',
  obj.prototype
);
console.log(
  '%c ||||| obj.__proto__ === Object.prototype',
  'color:yellowgreen',
  obj.__proto__ === Object.prototype
);

console.groupEnd();
console.log('------------------------------');
