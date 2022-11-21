// My solution

function mean(num) {
  const arr = num
    .toString()
    .split('')
    .map((num) => parseInt(num))
  let sum = arr.reduce((a, b) => a + b)
  return Math.floor(sum / num.toString().length)
}

// other solutions that I found after submitting mine

function mean(num) {
  return [...String(num)].reduce((a, c) => a + +c, 0) / String(num).length
}

// and another one
function mean(num) {
  return Math.floor(
    (num + '').split('').reduce((pre, cur) => pre + +cur, 0) /
      (num + '').length,
  )
}

// and another one

function mean(num) {
  let s = String(Math.abs(num)).split('')
  return s.reduce((x, y) => x + Number(y), 0) / s.length
}
