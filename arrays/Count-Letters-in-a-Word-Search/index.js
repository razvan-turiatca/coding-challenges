// my solution

function letterCounter(arr, letter) {
  let count = 0
  arr.flat().map((l) => l === letter && count++)
  return count
}

// a better solution I found

const letterCounter = (a, l) => a.flat().filter((x) => x == l).length
