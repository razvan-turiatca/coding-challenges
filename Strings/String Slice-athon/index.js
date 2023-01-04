function challenge1(s) {
  return s.slice(0, 5)
}

function challenge2(s) {
  return s.slice(-5)
}

function challenge3(s) {
  return s.slice(0).split('').reverse().join('')
}

function challenge4(s) {
  return s.slice(0, 6).split('').reverse().join('')
}

function challenge5(s) {
  return s
    .slice(-7)
    .split('')
    .filter((x, i) => i % 2 == 0 && x)
    .join('')
}
