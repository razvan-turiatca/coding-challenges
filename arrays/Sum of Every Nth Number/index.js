// my solution

function sumEveryNth(numbers, n) {
  return numbers.reduce((acc, cur, i) => ((i + 1) % n ? acc : acc + cur), 0)
}

// another solution

function sumEveryNth(numbers, n) {
  return numbers.filter((_, i) => (i + 1) % n == 0).reduce((a, b) => a + b, 0)
}
