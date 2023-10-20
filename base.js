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

console.groupCollapsed('__proto__ i prototype');
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

console.groupCollapsed('OBJECT');

// додавання ключа
const testObj = {
  key0: 0,
  key1: 1,
};
console.log('%c ||||| testObj', 'color:yellowgreen', testObj);

const testObj1 = {
  ...testObj,
  key2: 2,
};
console.log('%c ||||| testObj1', 'color:yellowgreen', testObj1);

// змінити значення
const testObj3 = {
  ...testObj,
  key1: 11,
};

console.log('%c ||||| testObj3', 'color:yellowgreen', testObj3);

// видалити ключ
const {key1, ...withoutKey1} = testObj; //  withoutKey1 {key0: 0}
console.log('%c ||||| withoutKey1', 'color:yellowgreen', withoutKey1);

// пошук ключа по значенню
const findKey0 = Object.keys(testObj).find((key) => testObj[key] === 0); // key0

console.log('%c ||||| findKey0', 'color:yellowgreen', findKey0);

console.groupEnd();
console.log('------------------------------');

console.group('ARRAY');

const arrTest = [1, 2, 3];

console.log('%c ||||| arrTest', 'color:yellowgreen', arrTest);

// додати елемент
const arrAdd1 = [...arrTest, 4];
const arrAdd2 = arrAdd1.concat(5);

console.log('%c ||||| arrAdd1', 'color:yellowgreen', arrAdd1);
console.log('%c ||||| arrAdd2', 'color:yellowgreen', arrAdd2);

// зміна в масиві
const arrToChange = [1, 2, 3, 4, 5];
const indexToChange = 2;
const newValue = 10;

const newArr = arrToChange.slice(); // Створення копії оригінального масиву
newArr[indexToChange] = newValue; // Зміна елементу у новому масиві
console.log('%c ||||| arrToChange', 'color:yellowgreen', arrToChange); // [1, 2, 3, 4, 5] (оригінальний масив залишається незмінним)
console.log('%c ||||| newArr', 'color:yellowgreen', newArr); // [1, 2, 10, 4, 5]

const arrWith = [1, 2, 3, 4, 5];
const changeArrWith = arrWith.with(2, 6); //[1, 2, 6, 4, 5]

console.log('%c ||||| arrWith', 'color:yellowgreen', arrWith);
console.log('%c ||||| changeArrWith', 'color:yellowgreen', changeArrWith);

// видалення з масиву
const isOdd = changeArrWith.filter((item) => item % 2); // [1, 5]
console.log('%c ||||| isOdd', 'color:yellowgreen', isOdd);

// сoртування
const sortValues = [1, 10, 21, 2];
const sortedOldValues = [...sortValues].sort((a, b) => a - b);
const sortedValues = sortValues.toSorted((a, b) => a - b);
console.log('%c ||||| sortValues', 'color:yellowgreen', sortValues);
console.log('%c ||||| sortedOldValues', 'color:yellowgreen', sortedOldValues);
console.log('%c ||||| sortedValues', 'color:yellowgreen', sortedValues);

// пошук
const finded = sortValues.find((item) => item === 21);
console.log('%c ||||| finded', 'color:yellowgreen', finded);

console.groupEnd();
console.log('------------------------------');

Object.prototype.customMethod = function () {
  console.log("Це новий метод, доданий до всіх об'єктів через prototype.");
};

Object.customMethod(); // "Це новий метод, доданий до всіх об'єктів через prototype."
