// my solution

function factorize(num) {
  let arr = []
  for (let i = num; i > 0; i--) {
    num % i == 0 && arr.push(i)
  }
  return arr.reverse()
}

// an elegant solution that I found after submitting mine

function factorize(num) {
  return new Array(num)
    .fill()
    .map((x, i) => i + 1)
    .filter((n) => num % n === 0)
}
