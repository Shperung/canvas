function palindrome(str) {
  if (!str) return false;

  return (
    [...str].reverse().join('').toLowerCase().replace(' ', '') ===
    str.toLowerCase().replace(' ', '')
  );

  return str.split('').reverse().join('') === str;
}

const res = palindrome('R erer');
const res2 = palindrome('test');

console.log('%c ||||| res', 'color:yellowgreen', res);
console.log('%c ||||| res2', 'color:yellowgreen', res2);
