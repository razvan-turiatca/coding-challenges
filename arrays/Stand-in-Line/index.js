// my solution

function nextInLine(arr, num) {
  return arr ? arr.push(num) && arr.slice(1) : 'No array has been selected'
}

// another solution I found after

const nextInLine = (arr, num) =>
  Array.isArray(arr) ? arr.slice(1).concat(num) : 'No array has been selected'
