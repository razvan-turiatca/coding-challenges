// my solution

function numberLenSort(arr) {
  return arr.sort((a, b) => a.toString().length - b.toString().length)
}

// another approach from another user

function numberLenSort(arr) {
  return arr.sort((a, b) =>
    a.toString().length >= b.toString().length ? 1 : -1,
  )
}
