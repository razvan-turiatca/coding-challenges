// my solution

function high(x) {
  const words = x.split(' ')
  const arrOfSums = words.map((w) =>
    w
      .split('')
      .map((c) => c.charCodeAt(0) - 96)
      .reduce((a, b) => a + b),
  )

  return words[arrOfSums.indexOf(Math.max(...arrOfSums))]
}
