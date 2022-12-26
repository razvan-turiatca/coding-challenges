// my solution

function bbqSkewers(grill) {
  const veg = grill.filter((x) => !x.includes('x')).length
  return [veg, grill.length - veg]
}

// other solutions

//1.

const bbqSkewers = (grill) => {
  arr = [0, 0]
  grill.forEach((g) => (g.includes('x') ? arr[1]++ : arr[0]++))
  return arr
}

//2.

function bbqSkewers(grill) {
  return grill.reduce(
    (acc, curr) => {
      curr.includes('x') ? acc[1]++ : acc[0]++
      return acc
    },
    [0, 0],
  )
}
