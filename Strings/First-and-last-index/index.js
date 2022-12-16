// my solution

function charIndex(word, char) {
  return !word.includes(char)
    ? undefined
    : [word.indexOf(char), word.lastIndexOf(char)]
}

// another solution

function charIndex(word, char) {
  return word.match(char)
    ? [word.indexOf(char), word.lastIndexOf(char)]
    : undefined
}
