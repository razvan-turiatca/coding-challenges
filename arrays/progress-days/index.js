// My Solution

function progressDays(runs) {
  let progressDays = 0
  runs.map((miles, idx) => miles > runs[idx - 1] && progressDays++)
  return progressDays
}

console.log(progressDays([15, 17, 13, 14]))

// best solution

function progressDays2(runs) {
  return runs.filter((e, i, a) => e < a[i + 1]).length
}
