// my solution

function indexOfCaps(str) {
  return str
    .split('')
    .map((x, i) => (x.match(/[A-Z]/) ? i : ''))
    .filter((x) => typeof x == 'number')
}

// another solution

function indexOfCaps(str) {
  return str
    .split('')
    .reduce((a, b, i) => (/[A-Z]/.test(b) ? [...a, i] : a), [])
}
