// first solution (filter + map)

function isGoodMatch(arr) {
  return arr.length % 2
    ? 'bad match'
    : arr.filter((_, i) => i % 2 == 0).map((x, i) => x + arr[i * 2 + 1])
}

// second solution (reduce)

function isGoodMatch(arr) {
  return arr.length % 2
    ? 'bad match'
    : arr.reduce((a, b, i) => (i % 2 ? a : a.concat(b + arr[i + 1])), [])
}
