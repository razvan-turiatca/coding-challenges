// my solution

function sumOfTwo(a, b, v) {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] + b[j] == v) {
        return true
      }
    }
  }
  return false
}

// another solution

function sumOfTwo(a, b, v) {
  return a.some((x) => b.includes(v - x))
}
