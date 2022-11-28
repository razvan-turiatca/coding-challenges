// my solution
function sumOfEvens(arr) {
  const filtered = arr.flat().filter((num) => num % 2 === 0)
  if (filtered.length == 0) return 0
  return filtered.reduce((a, b) => a + b)
}

// another solution I found after submitting mine

const sumOfEvens = (matrix) =>
  matrix.flat().reduce((total, num) => total + (num % 2 === 0 ? num : 0), 0)
