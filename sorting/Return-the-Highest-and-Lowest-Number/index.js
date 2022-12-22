// my solution

function highLow(str) {
  const sorted = str.split(' ').sort((a, b) => b - a)
  return `${sorted[0]} ${sorted[sorted.length - 1]}`
}

// another solution from another user

function highLow(str) {
  var nums = str.split(' ')
  return `${Math.max(...nums)} ${Math.min(...nums)}`
}
