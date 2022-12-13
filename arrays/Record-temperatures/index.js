// my solution:

function recordTemps(records, currentWeek) {
  return records.map(
    (day, i) =>
      new Array(
        Math.min(day[0], currentWeek[i][0]),
        Math.max(day[1], currentWeek[i][1]),
      ),
  )
}

// another interesting approach that that a different user had:

function recordTemps(records, currentWeek) {
  return records.map(([a, b], i) => {
    let [c, d] = currentWeek[i]
    return [c < a ? c : a, d > b ? d : b]
  })
}
