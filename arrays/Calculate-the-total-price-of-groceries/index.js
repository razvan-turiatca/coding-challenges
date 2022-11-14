// My solution

function getTotalPrice(groceries) {
  let total = 0
  groceries.map((el) => (total += el.price * el.quantity))
  return parseFloat(total.toFixed(1))
}

// another solution I found

function getTotalPrice(groceries) {
  return Number(
    groceries
      .reduce((acc, curr) => (acc += curr.price * curr.quantity), 0)
      .toFixed(2),
  )
}
