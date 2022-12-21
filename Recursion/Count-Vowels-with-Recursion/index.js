// my solution

function countVowels(str, v = 0) {
  const vowels = 'aeiou'
  if (str.length == 0) return v
  if (vowels.includes(str[0])) v++
  return countVowels(str.slice(1), v)
}

// another solution

const countVowels = (str) =>
  !str ? 0 : /[aeiou]/.test(str[0]) + countVowels(str.slice(1))
