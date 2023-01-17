// my solution

function howManyMissing(arr) {
  return arr.length ? arr[arr.length - 1] - arr[0] - arr.length + 1 : 0
}

// another solution

function howManyMissing(arr) {
  if (!arr.length) return 0
  return Math.max(...arr) - Math.min(...arr) - arr.length + 1
}
