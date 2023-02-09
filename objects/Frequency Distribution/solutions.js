//my solutions

function getFrequencies(arr) {
  const obj = {}
  arr.forEach((el) => (obj.hasOwnProperty(el) ? obj[el]++ : (obj[el] = 1)))
  return obj
}

// other solutions

function getFrequencies(arr) {
  return arr.reduce((obj, item) => {
    obj[item] = obj[item] + 1 || 1
    return obj
  }, {})
}
