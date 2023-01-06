// my low iq solution

function shortestDistance(str) {
  const arr = str.split(',').map((n) => parseInt(n))
  const xArr = arr.filter((_, i) => i % 2 == 0)
  const yArr = arr.filter((_, i) => i % 2)
  return parseFloat(
    Math.sqrt(
      (Math.max(...xArr) - Math.min(...xArr)) ** 2 +
        (Math.max(...yArr) - Math.min(...yArr)) ** 2,
    ).toFixed(2),
  )
}

// better solutions

// 1.

function shortestDistance(str) {
  let [x1, y1, x2, y2] = str.split(',').map((a) => Number(a))
  return Number(Math.hypot(x1 - x2, y1 - y2).toFixed(2))
}

// 2.

shortestDistance = (s) => (
  ([a, b, c, d] = s.split`,`),
  +Math.sqrt(Math.pow(a - c, 2) + Math.pow(b - d, 2)).toFixed(2)
)

// 3.

function shortestDistance(str) {
  const arr = str.split(',')

  return Number(Math.hypot(arr[2] - arr[0], arr[3] - arr[1]).toFixed(2))
}
