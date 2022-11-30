// my solution

function miniPeaks(arr) {
  return arr.filter((num, i) => num > arr[i - 1] && num > arr[i + 1] && num)
}

// another solution I found

function miniPeaks(arr) {
  return arr.filter((x, i, arr) => x > arr[i - 1] && x > arr[i + 1])
}
