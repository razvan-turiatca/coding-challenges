function censor(str) {
  return str
    .split(' ')
    .map((x) => (x.length > 4 ? '*'.repeat(x.length) : x))
    .join(' ')
}
