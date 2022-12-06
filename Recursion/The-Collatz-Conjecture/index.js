// my solution

function collatz(num) {
  let count = 0

  const col = (n) => {
    if (n == 1) return 1
    count++
    if (n % 2 == 0) {
      return col(n / 2)
    } else {
      return col(n * 3 + 1)
    }
  }
  col(num)
  return count
}

// other solution that I found from other users

// 1.

const collatz = (n) => (n === 1 ? 0 : collatz(n % 2 ? n * 3 + 1 : n / 2) + 1)

// 2.

function collatz(num, steps = 0) {
  if (num === 1) return steps
  num = num % 2 ? num * 3 + 1 : num / 2
  return collatz(num, steps + 1)
}

// 3.

function collatz(num, count = 0) {
  if (num == 1) return count
  else if (num % 2 == 0) return collatz(num / 2, ++count)
  else return collatz(num * 3 + 1, ++count)
}
