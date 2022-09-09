console.group('EVENTLOOP');
console.log('1 - Найвищий приорітет синхронні функції');

Promise.resolve().then(() => {
  console.log('2 - Мікротаски');
});

setTimeout(() => {
  console.log('4 - Макротаски');
});

Promise.resolve().then(() => {
  console.log('3 - Мікротаски');
});
