// my solution
function reverseAndNot(i) {
  return +(i.toString().split('').reverse().join('') + i.toString())
}
