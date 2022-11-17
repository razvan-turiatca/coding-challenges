// My solution

function removeVowels(str) {
  return str
    .split('')
    .filter(
      (char) =>
        !['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'].includes(char) &&
        char,
    )
    .join('')
}

// Another solution that I found

function removeVowels(str) {
  return str.replace(/[aeiou]/gi, '')
}

// and another one

function removeVowels(str) {
  return str
    .split('')
    .filter((char) => 'aeiouAEIOU'.indexOf(char) < 0)
    .join('')
}
