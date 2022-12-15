// my solution

function maximumScore(tileHand) {
  return tileHand.reduce((a, b) => a + b.score, 0)
}

// other solutions

// 1.
const maximumScore = (obj) => obj.reduce((a, { score }) => a + score, 0)

// 2.

function maximumScore(tileHand) {
  let max = 0
  tileHand.forEach(function (obj) {
    max += obj.score
  })
  return max
}
