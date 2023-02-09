// my solution

function isPandigital(num) {
  return [...new Set(num.toString())].length === 10
}
