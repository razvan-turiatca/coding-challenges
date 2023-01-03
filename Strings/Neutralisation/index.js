// my solution

function neutralise(s1, s2) {
  return s1
    .split('')
    .map((x, i) => (x == s2[i] ? x : 0))
    .join('')
}
