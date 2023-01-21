// my solution

function partiallyHide(phrase) {
  return phrase
    .split(' ')
    .map((word) =>
      [...word]
        .map((l, i) => (i == 0 || i == word.length - 1 ? l : '-'))
        .join(''),
    )
    .join(' ')
}

// using regular expression

const partiallyHide = (p) => p.replace(/\B\w\B/g, '-')
