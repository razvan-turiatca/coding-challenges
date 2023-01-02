// my solution

function reverseLetter(str) {
  return str
    .split('')
    .filter((c) => c.charCodeAt(0) > 96 && c.charCodeAt(0) < 123)
    .reverse()
    .join('')
}

// other popular solutions

// 1.
const reverseLetter = (str) => str.match(/[a-z]/g).reverse().join('')
// 2.

function reverseLetter(str) {
  return str
    .split('')
    .reverse()
    .filter((val) => /[a-zA-Z]/.test(val))
    .join('')
}

// 3.

reverseLetter = (s) =>
  s
    .replace(/[^a-z]/gi, '')
    .split('')
    .reverse()
    .join('')
