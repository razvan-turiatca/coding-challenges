// My solution

function inclusiveArray(startNum, endNum) {
  if (startNum >= endNum) {
    return [startNum]
  }

  let arr = []
  for (let i = startNum; i <= endNum; i++) {
    arr.push(i)
  }
  return arr
}

// other solution that I found after submitting mine

function inclusiveArray(startNum, endNum) {
  return startNum > endNum
    ? [startNum]
    : Array.from({ length: endNum - startNum + 1 }, (_, i) => startNum + i)
}
