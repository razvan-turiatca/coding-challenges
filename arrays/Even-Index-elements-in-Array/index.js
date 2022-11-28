// my solution

function evenLast(arr) {
  return arr.length != 0
    ? arr.reduce((acc, n, i) => acc + (i % 2 == 0 ? n : 0), 0) *
        arr[arr.length - 1]
    : 0
}

// another solution I found after submitting mine

const evenLast = (arr) =>
  arr.reduce((a, c, i) => a + (!(i % 2) ? c : 0), 0) * arr[arr.length - 1] || 0
