// my solution

function mysteryFunc(num) {
  return num
    .toString()
    .split('')
    .reduce((a, b) => a * b)
}
