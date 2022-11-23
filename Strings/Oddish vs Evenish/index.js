// my solution

function oddishOrEvenish(num) {
  return num
    .toString()
    .split('')
    .reduce((a, b) => parseInt(a) + parseInt(b)) %
    2 ==
    0
    ? 'Evenish'
    : 'Oddish'
}

// another solution

function oddishOrEvenish(num) {
  return [...String(num)].map(Number).reduce((a, v) => a + v) % 2
    ? 'Oddish'
    : 'Evenish'
}
