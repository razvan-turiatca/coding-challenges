//my solution

function specialReverse(s, c) {
  return s
    .split(' ')
    .map((w) => (w[0] == c ? w.split('').reverse().join('') : w))
    .join(' ')
}

// a slightly different approach

function specialReverse(s, c) {
  return s
    .split(' ')
    .map((x) => (x.startsWith(c) ? x.split('').reverse().join('') : x))
    .join(' ')
}
