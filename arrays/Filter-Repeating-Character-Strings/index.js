// My solution

function identicalFilter(arr) {
  return arr.filter((item) => [...new Set(item)].length == 1)
}

// another solution from a different user

function identicalFilter(arr) {
  return arr.filter((i) => i === i[0].repeat(i.length))
}
