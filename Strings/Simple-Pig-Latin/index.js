//my solution

function pigIt(str) {
  return str
    .split(' ')
    .map((word) =>
      /^[a-z]+$/gi.test(word) ? word.slice(1).concat(word[0], 'ay') : word,
    )
    .join(' ')
}
