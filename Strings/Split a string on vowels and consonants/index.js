// my solution
function split(str) {
  const vowels = str
    .split('')
    .filter((x) => 'aeiou'.includes(x))
    .join('')
  return (
    vowels +
    str
      .split('')
      .filter((x) => !'aeiou'.includes(x))
      .join('')
  )
}

// another solution

const split = (str) =>
  str.replace(/[^aeiou]/gi, '') + str.replace(/[aeiou]/gi, '')
