// my solution

function isCentral(str) {
  return str.length % 2
    ? str.split('').findIndex((l, i) => l != ' ') === Math.floor(str.length / 2)
    : false
}

// different solution:

//1.
function isCentral(str) {
  return str.trimLeft().length === str.trimRight().length
}
//2.
const isCentral = (s) => s == [...s].reverse().join('')
