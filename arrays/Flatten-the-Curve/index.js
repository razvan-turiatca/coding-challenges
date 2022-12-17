// my solution

function flattenCurve(arr) {
  return arr.map((_) => +(arr.reduce((a, b) => a + b) / arr.length).toFixed(1))
}

// another solution from a dofferent user

function flattenCurve(arr) {
  let avg = Number(arr.reduce((t, c) => t + c / arr.length, 0).toFixed(1))
  return arr.map(() => avg)
}
