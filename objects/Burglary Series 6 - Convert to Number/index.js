// first solution

function convertToNumber(obj) {
  for (let val in obj) {
    obj[val] = +obj[val]
  }
  return obj
}

// second solution

function convertToNumber(obj) {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, +v]))
}

//third solution

function convertToNumber(obj) {
  return Object.keys(obj).forEach((key) => (obj[key] = +obj[key])), obj
}
