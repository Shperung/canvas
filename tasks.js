// const arr = [1, 2, 3, 4, 5, 6];
// const arr = [2, 5, 8, 1, 5, 6, 8, 8, 1];
// const arr = [1, 1, 1, 1, 1, 1];
const arr = [55, 44, 33, 22, 145, 173];

console.log('%c ||||| arr', 'color:yellowgreen', arr);
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
