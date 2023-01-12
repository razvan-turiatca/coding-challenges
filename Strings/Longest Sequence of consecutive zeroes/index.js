// my solution

function longestZero(s) {
  return s.split('1').reduce((a, b) => (b.length > a.length ? b : a))
}

// another solution

//1.
function longestZero(s) {
  return s.split('1').sort().reverse()[0]
}

//2.

const longestZero = (s) => s.split('1').sort().pop()
