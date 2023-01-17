// my solution

function disemvowel(str) {
  return str
    .split('')
    .filter((x) => !'aeiouAEIOU'.includes(x))
    .join('')
}

// another solution

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '')
}
