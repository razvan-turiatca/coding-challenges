// my solution
function probability(arr, num) {
  let count = 0
  arr.filter((n) => n >= num && count++)
  const prob = (count / arr.length) * 100
  return +prob.toFixed(1)
}

//another solution I found

const probability = (a, n) =>
  +((a.filter((x) => x >= n).length / a.length) * 100).toFixed(1)
