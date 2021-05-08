import 'regenerator-runtime/runtime'

console.groupCollapsed('replaceAll')
const str = 'PHP test PHP test PHP';
console.log('str.replace - ', str.replace("PHP", "JS"))
console.log('str.replaceAll - ', str.replaceAll("PHP", "JS"))
console.groupEnd()
///////////////////////////////////////////////////////////////

console.group('Promise.any')
function createPromise(value, delay, error) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
     error ? reject(error) : resolve(value)
    }, delay)
  })
}

const p1 = createPromise(1, 250)
const p2 = createPromise(2, 700, 'err p2')
const p3 = createPromise(3, 150, 'err p3')

p1.then(a => console.log('p1.then', a)) // second
p2.then(a => console.log('p2.then', a)) // third
p3.then(a => console.log('p3.then', a)) // first

async function startPromiseAll() {
   try {
  // чекає поки всі закінчаться
  const res = await Promise.all([p1, p2, p3])
  console.log('startPromiseAll', res);
   } catch(e) {
    console.log('startPromiseAll e', e)
  }
}
startPromiseAll()


async function startPromiseAny() {
  try {
  // виконує перший позитивний
  //const res = await Promise.any([p3, p2, p1])
  const res = await Promise.any([p3, p2])
  console.log('startPromiseAny', res);

  } catch(e) {
    // AggregateError: All promises were rejected
    console.log('startPromiseAny e', e)
    console.log('startPromiseAny e.errors', e.errors)
  }
}
startPromiseAny()

console.groupEnd()
///////////////////////////////////////////////////////////////

