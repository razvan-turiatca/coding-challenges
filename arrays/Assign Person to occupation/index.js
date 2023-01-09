//my solution

function assignPersonToJob(names, jobs) {
  return Object.fromEntries(names.map((name, i) => [name, jobs[i]]))
}

//another solution

function assignPersonToJob(pa, ja) {
  return pa.reduce((a, c, i) => {
    a[c] = ja[i]
    return a
  }, {})
}
