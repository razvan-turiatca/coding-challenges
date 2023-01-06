// my solution

function reverseWords(str) {
  return str
    .split(' ')
    .map((x) => [...x].reverse().join(''))
    .join(' ')
}
