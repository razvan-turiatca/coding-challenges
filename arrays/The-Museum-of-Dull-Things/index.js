// my solution

function removeSmallest(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1)
  return arr
}

// another solution from a different member

removeSmallest = (a) => (a.splice(a.indexOf(Math.min(...a)), 1), a)
