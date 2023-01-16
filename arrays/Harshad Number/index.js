// my solution

function isHarshad(n) {
  return (
    n %
      n
        .toString()
        .split('')
        .reduce((a, b) => +a + +b) ==
    0
  )
}
