//my solution

function filterValues(obj) {
  let filteredObj = {}

  for (let key in obj) {
    if (obj[key] >= 5000) {
      filteredObj[key] = obj[key]
    }
  }
  return filteredObj
}

// other solution

function filterValues(obj) {
  return Object.fromEntries(Object.entries(obj).filter((x) => x[1] >= 5000))
}
