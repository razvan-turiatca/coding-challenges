// My solution

function incrementToTop(arr) {
  return arr
    .sort((a, b) => a - b)
    .reduce((a, b) => a + (arr[arr.length - 1] - b), 0)
}

// Another interesting solution that I found after submiting mine:

function incrementToTop(arr) {
  let biggestElem = Math.max(...arr)
  return arr.reduce((a, b) => {
    return a + (biggestElem - b)
  }, 0)
}
