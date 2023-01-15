// my solution

function mergeArrays(a, b) {
  return a.length >= b.length
    ? a.reduce(
        (acc, cur, i) => (b[i] ? [...acc, cur, b[i]] : [...acc, cur]),
        [],
      )
    : b.reduce(
        (acc, cur, i) => (a[i] ? [...acc, a[i], cur] : [...acc, cur]),
        [],
      )
}

// another solution

function mergeArrays(a, b) {
  var result = []
  for (var i = 0; i < Math.max(a.length, b.length); i++) {
    if (a[i]) result.push(a[i])
    if (b[i]) result.push(b[i])
  }
  return result
}
