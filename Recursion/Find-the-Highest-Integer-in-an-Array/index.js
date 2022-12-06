// My solution

function findHighest(arr) {
  let num = -Infinity

  const highest = (input) => {
    if (input.length == 0) return
    if (num < input[0]) num == input[0]

    highest(input.slice(1))
  }
  highest(arr)
  return num
}

// another solutions I found

// 1.
function findHighest(arr) {
  if (arr.length == 1) return arr[0]
  if (arr[0] > arr[1]) arr[1] = arr[0]
  arr = arr.splice(1)
  return findHighest(arr)
}

// 2.
function findHighest(a, m = 0) {
  x = a.pop()
  m = m > x ? m : x
  return a.length ? findHighest(a, m) : m
}
