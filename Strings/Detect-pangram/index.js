// my solution

function isPangram(string) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const arrAl = alphabet.split('')
  return (
    arrAl.filter((l) => string.toLowerCase().split('').indexOf(l) != -1)
      .length == alphabet.length
  )
}

//other solutions

//1.

function isPangram(string) {
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every((x) => string.toLowerCase().includes(x))
}

//2.
const isPangram = (string) =>
  new Set(string.toLowerCase().replace(/[^a-z]/gi, ``)).size === 26
