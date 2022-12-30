// initial code that needed to be fixed

function calculateSum(txt) {
  return txt.reduce((ch) => ch)
}

function reverseString(txt) {
  return txt.reduce((ch) => ch)
}

// my solution

function calculateSum(txt) {
  return txt
    .split('')
    .map((x) => x.charCodeAt(0))
    .reduce((a, b) => a + b)
}

function reverseString(txt) {
  return txt.split('').reverse().join('')
}

// a second approach

const calculateSum = (txt) => [...txt].reduce((a, ch) => a + ch.charCodeAt(), 0)

const reverseString = (txt) => [...txt].reduce((a, ch) => ch + a, '')
