// my solution

function mapping(letters) {
  let letterObj = {}
  letters.forEach((letter) => (letterObj[letter] = letter.toUpperCase()))
  return letterObj
}

console.log(mapping(['a', 'b', 'c']))

// a different solution that I found interesting, after I submited mine:

function mapping(letters) {
  return letters.reduce((a, c) => ((a[c] = c.toUpperCase()), a), {})
}
