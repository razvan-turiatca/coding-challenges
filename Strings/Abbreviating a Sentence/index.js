// first solution

function abbreviate(sentence, n = 4) {
  return sentence
    .split(' ')
    .reduce(
      (acc, cur) =>
        cur.length >= n ? [...acc, cur[0].toUpperCase()] : [...acc],
      [],
    )
    .join('')
}

// second solution

function abbreviate(sentence, n) {
  return sentence
    .split(' ')
    .filter((el) => el.length >= (n !== undefined ? n : 4))
    .map((el) => el.charAt(0).toUpperCase())
    .join('')
}
