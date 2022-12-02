//my solution

function howManyTimes(msg) {
  return msg.split('').reduce((a, b, i, arr) => a + (msg.charCodeAt(i) - 96), 0)
}
