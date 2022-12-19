// my solution

function squarePatch(n) {
  return Array(n).fill(Array(n).fill(n))
}

// another solution from a different user

const squarePatch = (length) =>
  Array.from({ length }, () => Array.from({ length }).fill(length))
