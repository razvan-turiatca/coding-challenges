// my solution

function lcm(n1, n2) {
  const max = Math.max(n1, n2)
  const min = Math.min(n1, n2)
  let temp = max

  while (true) {
    if (temp % min) {
      temp += max
    } else {
      return temp
    }
  }
}

// for loop solution

function lcm(n1, n2) {
  for (let i = 1; i <= n1 * n2; i++) {
    if (!(i % n1) && !(i % n2)) {
      return i
    }
  }
}
