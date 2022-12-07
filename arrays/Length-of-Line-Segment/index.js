// My solution

function lineLength([x1, y1], [x2, y2]) {
  let cat1 = x2 - x1
  let cat2 = y2 - y1

  return +Math.sqrt(Math.pow(cat1, 2) + Math.pow(cat2, 2)).toFixed(2)
}

// another solution

function lineLength([x1, y1], [x2, y2]) {
  return +Math.hypot(x1 - x2, y1 - y2).toFixed(2)
}
