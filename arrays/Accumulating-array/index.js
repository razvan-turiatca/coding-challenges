// my solution

function accumulatingArray(arr) {
  return arr.map((n, i, a) => a.slice(0, i + 1).reduce((x, y) => x + y))
}

// other solutions

// 1.

const accumulatingArray = (arr) => {
  let sum = 0
  return arr.map((num) => (sum += num))
}

// 2.

function accumulatingArray(arr) {
  var i

  for (i = 1; i < arr.length; i++) {
    arr[i] = arr[i] + arr[i - 1]
  }
  return arr
}
