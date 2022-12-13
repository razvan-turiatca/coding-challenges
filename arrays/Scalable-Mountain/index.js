// my solution

function isScalable(arr) {
  return arr.slice(1).every((num, i) => Math.abs(num - arr[i]) <= 5)
}

//another solution

function isScalable(arr) {
  for (i = 0; i < arr.length; i++) {
    if (Math.abs(arr[i] - arr[i + 1]) > 5) {
      return false
    }
  }
  return true
}
