// my solution

function joinDigits(n) {
  return Array(n)
    .fill(0)
    .map((num, i) => i + 1)
    .join('')
    .split('')
    .join('-')
}
