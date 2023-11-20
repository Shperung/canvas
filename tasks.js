// const arr = [1, 2, 3, 4, 5, 6];
// const arr = [2, 5, 8, 1, 5, 6, 8, 8, 1];
// const arr = [1, 1, 1, 1, 1, 1];
const arr = [55, 44, 33, 22, 145, 173];

// console.log('%c ||||| arr', 'color:yellowgreen', arr);
////////////// сума елементів масиву
let summ1 = 0;
for (let i = 0; i < arr.length; i++) {
  summ1 += arr[i];
}
// console.log('%c ||||| summ1', 'color:yellowgreen', summ1);

const summ2 = arr.reduce((acc, cur) => {
  return acc + cur;
}, 0);
// console.log('%c ||||| summ2', 'color:yellowgreen', summ2);

////////////// максимальний і мінімальний елемент масива

const max1 = Math.max.apply(null, arr);
// console.log('%c ||||| max1', 'color:yellowgreen', max1);

const min1 = Math.min.apply(null, arr);
// console.log('%c ||||| min1', 'color:yellowgreen', min1);

const max2 = arr.reduce((acc, cur) => {
  if (acc < cur) acc = cur;
  // debugger;
  return acc;
}, 0);
// console.log('%c ||||| max2', 'color:yellowgreen', max2);

const min2 = arr.reduce((acc, cur) => {
  if (cur < acc) acc = cur;
  // debugger;
  return acc;
}, arr[1]);
// console.log('%c ||||| min2', 'color:yellowgreen', min2);

let max3 = arr[1];
for (let i = 0; i < arr.length; i++) {
  if (max3 < arr[i]) max3 = arr[i];
}
// console.log('%c ||||| max3', 'color:yellowgreen', max3);

let min3 = arr[1];
for (let i = 0; i < arr.length; i++) {
  if (min3 > arr[i]) min3 = arr[i];
}
// console.log('%c ||||| min3', 'color:yellowgreen', min3);

// const min4 = arr.sort((a, b) => a - b)[0];
// console.log('%c ||||| min4', 'color:yellowgreen', min4);

// const max4 = arr.sort((a, b) => b - a)[0];
// console.log('%c ||||| max4', 'color:yellowgreen', max4);
// console.log('%c ||||| arr before sort', 'color:yellowgreen', arr);

const min4 = arr.toSorted((a, b) => a - b)[0];
// console.log('%c ||||| min4', 'color:yellowgreen', min4);

const max4 = arr.toSorted((a, b) => b - a)[0];
// console.log('%c ||||| max4', 'color:yellowgreen', max4);
// console.log('%c ||||| arr before sort', 'color:yellowgreen', arr);

const max5 = Math.max(...arr);
// console.log('%c ||||| max5', 'color:yellowgreen', max5);

// сортування в обєкті
const users = [
  {
    name: 'Anna',
    age: 20,
  },
  {
    name: 'John',
    age: 30,
  },
];

const maxAgeUser = users.toSorted((a, b) => {
  if (b.age < a.age) return -1;
  if (b.age === a.age) return 0;
  return 1;
});

const maxAgeUser2 = users.toSorted((a, b) => b.age - a.age);
// console.log('%c ||||| maxAgeUser', 'color:yellowgreen', maxAgeUser);
// console.log('%c ||||| maxAgeUser2', 'color:yellowgreen', maxAgeUser2);

const maxNameUser = users.toSorted((a, b) => b.name.localeCompare(a.name));
// console.log('%c ||||| maxNameUser', 'color:yellowgreen', maxNameUser);

////////////////// розвернути масив

const rev = arr.toReversed();
// console.log('%c ||||| rev', 'color:yellowgreen', rev);
// const rev2 = arr.reverse();
// console.log('%c ||||| rev2', 'color:yellowgreen', rev2);
// console.log('%c ||||| arr', 'color:yellowgreen', arr);

const rev3 = [];
for (let i = 0; i < arr.length; i++) {
  // console.log('%c ||||| i', 'color:yellowgreen', i);
  // console.log('%c ||||| arr[i]', 'color:yellowgreen', arr[i]);
  rev3.push(arr[arr.length - 1 - i]);
}
// console.log('%c ||||| rev3', 'color:yellowgreen', rev3);

const rev4 = [];
for (let i = arr.length - 1; i >= 0; i--) {
  rev4.push(arr[i]);
}
// console.log('%c ||||| rev4', 'color:yellowgreen', rev4);

const rev5 = arr.map((item, i) => {
  return arr[arr.length - 1 - i];
});

// console.log('%c ||||| rev5', 'color:yellowgreen', rev5);

const rev6 = [...arr].map([].pop, arr);

// console.log('%c ||||| rev6', 'color:yellowgreen', rev6);

/////////////// відфільтрувати фолсі значення

const arf = [5, 0, null, undefined, NaN, 'ok', false];
// console.log('%c ||||| arf', 'color:yellowgreen', arf);

const fil = arf.filter(Boolean);
// console.log('%c ||||| fil', 'color:yellowgreen', fil);

const fil2 = [];

for (let index = 0; index < arf.length; index++) {
  if (arf[index]) fil2.push(arf[index]);
}
// console.log('%c ||||| fil2', 'color:yellowgreen', fil2);

const words = [
  'grapefruit',
  'banana',
  'orange',
  'banana',
  'grapefruit',
  'banana',
  'banana',
  'banana',
  'grapefruit',
];
//// унікальні слова відфільровані по кількості раз які зустрічаються

// const uniques = Array.from(new Set(words));
const uniques = [...new Set(words)];

const big = uniques.reduce((acc, cur) => {
  return {...acc, [cur]: words.filter((item) => item === cur).length};
}, {});

const s = uniques.toSorted((a, b) => big[b] - big[a]);
// console.log('%c ||||| uniques', 'color:yellowgreen', uniques);
// console.log('%c ||||| big', 'color:yellowgreen', big);
// console.log('%c ||||| s', 'color:yellowgreen', s); //[ 'banana', 'grapefruit', 'orange' ]

function getUniqueWords(words) {
  const wordCount = {};

  words.forEach((word) => {
    wordCount[word] = (wordCount[word] || 0) + 1;
  });

  const uniqueWords = Object.keys(wordCount);
  uniqueWords.sort((a, b) => wordCount[b] - wordCount[a]);

  return uniqueWords;
}

const uniqueWords = getUniqueWords(words);
// console.log(uniqueWords);

///////////// функція яка повертає масив аргументів помножених на 2

function m(...arg) {
  return arg.map((item) => item * 2);
}

// console.log('%c ||||| m(1, 2, 3)', 'color:yellowgreen', m(1, 2, 3));

////////////////// сума чисел

function sum(p) {
  return (p2) => p + p2;
}

const ss = sum(3)(4);
// console.log('%c ||||| ss', 'color:yellowgreen', ss);

const str = 'DunYw5eMY48';
function addPlusToLowerCaseChars(str) {
  const result = str
    .split('')
    .map((char) => {
      if (char !== char.toLowerCase()) {
        return char + '+';
      } else {
        return char;
      }
    })
    .join('');

  return result;
}

const strPlus = addPlusToLowerCaseChars(str);

console.log('%c ||||| strPlus', 'color:yellowgreen', strPlus);
