// my solution

function makeGrlex(arr) {
  return arr.sort().sort((a, b) => a.length - b.length)
}

//secondary solution

function makeGrlex(arr) {
  return arr.sort((a, b) =>
    a.length !== b.length ? a.length - b.length : a.localeCompare(b),
  )
}
