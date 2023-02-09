// my solution

function absentVowel(x) {
  const vowels = 'aeiou'
  return vowels.split('').reduce((a, b, i) => (!x.includes(b) ? a + i : a), 0)
}

// a simpler solution

function absentVowel(x) {
  return ['a', 'e', 'i', 'o', 'u'].findIndex((v) => !x.includes(v))
}
