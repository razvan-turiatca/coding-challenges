// My solution

function cumulativeSum(arr) {
  return arr.map((num, i) => arr.slice(0, i + 1).reduce((a, b) => a + b))
}

// a different solution

function cumulativeSum(array) {
  var sum = 0
  return array.map((x) => (sum += x))
}
