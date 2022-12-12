// my solution

function lonelyInteger(arr) {
  return arr.filter((int) => !arr.includes(0 - int)).pop()
}

// solution offered by another user:

const lonelyInteger = (arr) => [...new Set(arr)].reduce((a, b) => a + b)
