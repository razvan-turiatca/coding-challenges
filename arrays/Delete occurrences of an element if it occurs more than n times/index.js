// my solution

function deleteNth(arr, n) {
  return arr.reduce(
    (a, b) => (a.filter((x) => x == b).length < n ? [...a, b] : [...a]),
    [],
  )
}

// other solution

function deleteNth(arr, x) {
  var obj = {}
  return arr.filter(function (number) {
    obj[number] = obj[number] ? obj[number] + 1 : 1
    return obj[number] <= x
  })
}
