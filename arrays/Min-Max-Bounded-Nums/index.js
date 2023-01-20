// my solution

function minMinMax(array) {
  const sortedArr = array.sort((a, b) => a - b)
  const absArr = Array(sortedArr[sortedArr.length - 1] - sortedArr[0])
    .fill(sortedArr[0])
    .map((x, i) => x + i)
    .filter((a) => !sortedArr.includes(a))
    .sort((a, b) => a - b)
  return [sortedArr[0], absArr[0], sortedArr.pop()]
}

// another solution

minMinMax = (array) => {
  b = Math.min(...array)
  while (array.includes(b) == true) {
    b += 1
  }
  return [Math.min(...array), b, Math.max(...array)]
}
