// my solution

function replaceVowel(word) {
  return word
    .split('')
    .map((x) => ('aeiou'.includes(x) ? 'aeiou'.indexOf(x) + 1 : x))
    .join('')
}

// solution with regex

function replaceVowel(word) {
  return word.replace(/[aeiou]/g, (v) => 'aeiou'.indexOf(v) + 1)
}
