// my solution

function extendVowels(word, num) {
  return num >= 0 && Number.isInteger(num)
    ? word
        .split('')
        .map((x) => ('aeiou'.includes(x.toLowerCase()) ? x.repeat(num + 1) : x))
        .join('')
    : 'invalid'
}

// another solution

const extendVowels = (w, n) =>
  n < 0 || n % 1 ? 'invalid' : w.replace(/[aeiou]/gi, (c) => c.repeat(n + 1))
