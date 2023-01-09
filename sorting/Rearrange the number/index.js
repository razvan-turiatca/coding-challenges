// my solution

function rearrangedDifference(num) {
  const arr = num
    .toString()
    .split('')
    .map((x) => +x)
  return (
    +arr.sort((a, b) => b - a).join('') - +arr.sort((a, b) => a - b).join('')
  )
}

// another solution

function rearrangedDifference(num) {
  const digits = [...`${num}`].sort()
  return digits.reverse().join('') - digits.reverse().join('')
}
