console.groupCollapsed('base');
const now = new Date();
console.log('%c ||||| now', 'color:yellowgreen', now);

const start = new Date(0);
console.log('%c ||||| start', 'color:yellowgreen', start);

const input1 = new Date('2023-06-02 09:54:58');
console.log('%c ||||| input1', 'color:yellowgreen', input1);

let input2 = new Date(2023, 6, 8, 10, 15, 12);
input2.setFullYear(2024);
// місяці почиаються з 0. тут 10 це листопад
input2.setMonth(10);
console.log('%c ||||| input2', 'color:yellowgreen', input2);
console.log(
  '%c ||||| input2.getFullYear()',
  'color:yellowgreen',
  input2.getFullYear()
);
console.log(
  '%c ||||| input2.getMonth() + 1',
  'color:yellowgreen',
  input2.getMonth() + 1
);

console.groupEnd();
console.log('------------------------------');

console.groupCollapsed('toLocaleString');

const timeZone5 = new Date('2023-06-02 09:54:58 +2');
console.log('%c ||||| timeZone5', 'color:yellowgreen', timeZone5);

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  era: 'long',
};

console.log(
  '%c ||||| timeZone5',
  'color:yellowgreen',
  timeZone5.toLocaleString('uk-UA')
);
console.log(
  '%c ||||| timeZone5',
  'color:yellowgreen',
  timeZone5.toLocaleString('uk-UA', options)
);
console.log(
  '%c ||||| timeZone5',
  'color:yellowgreen',
  timeZone5.toLocaleString('en-En', options)
);
console.log(
  '%c ||||| timeZone5',
  'color:yellowgreen',
  timeZone5.toLocaleString('hi-IN', options)
);
console.log(
  '%c ||||| timeZone5',
  'color:yellowgreen',
  timeZone5.toLocaleString('ar-EG', options)
);

console.groupEnd();
console.log('------------------------------');
