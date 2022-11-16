// My Solution

function isPositiveDominant(a) {
  return (
    [...new Set(a)].filter((num) => num > 0).length >
    [...new Set(a)].filter((num) => num < 0).length
  )
}

// Other solutions that I found after submitting mine

function isPositiveDominant(a) {
  return (
    new Set(a.filter((x) => x > 0)).size > new Set(a.filter((x) => x < 0)).size
  )
}

// and an even better one

const isPositiveDominant = (a) =>
  [...new Set(a)].reduce((a, b) => a + Math.sign(b), 0) > 0
