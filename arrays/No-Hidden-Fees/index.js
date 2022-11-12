// My solution:

function hasHiddenFee(prices, t) {
  return (
    prices.reduce((a, b) => a + parseInt(b.substring(1)), 0) !=
    parseInt(t.substring(1))
  )
}

// another very good solution I found after submitting mine

const hasHiddenFee = (prices, t) =>
  prices.reduce((acc, cur) => acc + +cur.slice(1), 0) < +t.slice(1)
