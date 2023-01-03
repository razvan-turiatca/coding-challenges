// my solution

function isVowelSandwich(str) {
  return (
    str.length === 3 &&
    str
      .split('')
      .every((x, i) => (i % 2 ? 'aeiou'.includes(x) : !'aeiou'.includes(x)))
  )
}

// other solutions

function isVowelSandwich(str) {
  return /^[^aeiou][aeiou][^aeiou]$/.test(str)
}
