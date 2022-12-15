// my solution

function inkLevels(inks) {
  return Math.min(...Object.values(inks))
}

// other solution

// 1.

function inkLevels(inks) {
  let maxPages = Infinity
  console.log(inks)
  Object.keys(inks).map((key) => {
    if (inks[key] < maxPages) maxPages = inks[key]
  })
  return maxPages
}

// 2.

function inkLevels(inks) {
  arrInks = Object.values(inks)

  arrInks.sort((a, b) => a - b)

  return arrInks[0]
}
