// my solution

function cons(arr) {
  arr = arr.sort((a, b) => a - b)
  const helperArr = Array.from(Array(arr.length))
    .fill(arr[0] - 1)
    .map((x, i) => arr[0] + i)

  return arr.every((x, i) => x === helperArr[i])
}

// a better solution

function cons(arr) {
  return arr
    .sort((a, b) => a > b)
    .slice(1)
    .every((x, i) => arr[i] == x - 1)
}
