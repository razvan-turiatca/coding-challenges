// my recursive solution

function collatz(n, arr = []) {
  if (n == 1) return [arr.length + 1, Math.max(...arr)]
  if (n % 2) {
    arr.push(n * 3 + 1)
    return collatz(n * 3 + 1, arr)
  } else {
    arr.push(n / 2)
    return collatz(n / 2, arr)
  }
}

// the while loop solution

function collatz(n) {
  let seq = [n]
  while (n > 1) {
    n % 2 === 0 ? (n = n / 2) : (n = n * 3 + 1)
    seq.push(n)
  }
  return [seq.length, Math.max(...seq)]
}
