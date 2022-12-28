// my solution

function doubleLetters(word) {
  if (word.length === 0) return false
  if (word[0] == word[1]) return true
  return doubleLetters(word.slice(1))
}

//other solutions without recursion

// 1.
function doubleLetters(word) {
  return /([a-z])\1+/.test(word)
}

// 2.

function doubleLetters(word) {
  return [...word].filter((x, i, a) => x == a[i + 1]).length > 0
}
