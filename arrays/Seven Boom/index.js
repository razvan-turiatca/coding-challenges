// my solution

function sevenBoom(arr) {
  return arr
    .map((x) => [...String(x)].some((d) => +d === 7))
    .some((b) => b === true)
    ? 'Boom!'
    : 'there is no 7 in the array'
}

// some other solution

//1.
const sevenBoom = (arr) =>
  /7/.test(arr) ? 'Boom!' : 'there is no 7 in the array'
//2.
const sevenBoom = (arr) =>
  arr.join('').indexOf('7') >= 0 ? 'Boom!' : 'there is no 7 in the array'

//3.

const sevenBoom = function (arr) {
  return arr.join().includes('7') ? 'Boom!' : 'there is no 7 in the array'
}
