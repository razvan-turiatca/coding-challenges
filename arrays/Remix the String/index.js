// my solution

function remix(str, arr) {
  const newArr = Array(str.length)
  str.split('').forEach((x, i) => (newArr[arr[i]] = x))
  return newArr.join('')
}

// a better solution

function remix(str, arr) {
  return arr.map((x, i, arr) => str.charAt(arr.indexOf(i))).join('')
}
