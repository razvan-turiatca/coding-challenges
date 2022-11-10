// My solution

function strMatchBy2char(a, b) {
  let numberOfTimes = 0

  for (let i = 0; i < a.length - 1; i++) {
    if (a[i] + a[i + 1] === b[i] + b[i + 1]) {
      numberOfTimes++
    }
  }
  return numberOfTimes
}
