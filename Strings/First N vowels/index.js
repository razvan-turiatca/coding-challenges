// my solution

function firstNVowels(s, n) {
  const vowels = [...s].filter((x) => 'aeiou'.includes(x))
  return n > vowels.length ? 'invalid' : vowels.slice(0, n).join('')
}

// a different solution

firstNVowels = (s, n) =>
  (a = s.replace(/[^aeiou]/g, '').substring(0, n)).length < n ? 'invalid' : a
