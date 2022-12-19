// my solution

function duplicateEncode(word) {
  return word
    .split('')
    .map((x) => x.toLowerCase())
    .map((c, i, arr) => (arr.indexOf(c) === arr.lastIndexOf(c) ? '(' : ')'))
    .join('')
}

// another solution from a different user

function duplicateEncode(word) {
  var letters = word.toLowerCase().split('')
  return letters
    .map(function (c, i) {
      return letters.some(function (x, j) {
        return x === c && i !== j
      })
        ? ')'
        : '('
    })
    .join('')
}
