// my solution

function colorPatternTimes(cols) {
  return (
    cols.reduce(
      (total, col, i) => (col === cols[i - 1] ? total + 2 : total + 3),
      0,
    ) - 1
  )
}

// another solution

const colorPatternTimes = (cols) =>
  cols.length * 2 + cols.slice(1).filter((c, i) => c !== cols[i]).length
