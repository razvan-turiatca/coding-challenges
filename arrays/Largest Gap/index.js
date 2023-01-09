//my solution

function largestGap(arr) {
  let maxGap = 0
  arr
    .sort((a, b) => a - b)
    .forEach((x, i) => {
      if (arr[i + 1] - x > maxGap) {
        maxGap = arr[i + 1] - x
      }
    })
  return maxGap
}

// other solutions

//1.
function largestGap(arr) {
  let maxGap = 0
  arr
    .sort((a, b) => a - b)
    .forEach((x, i) => {
      if (arr[i + 1] - x > maxGap) {
        maxGap = arr[i + 1] - x
      }
    })
  return maxGap
}

// 2.
const largestGap = (arr) => (
  (arr = arr.sort((a, b) => a - b)),
  Math.max(...arr.slice(1).map((num, i) => num - arr[i]))
)
