// my solution

function simonSays(arr1, arr2) {
  arr2.push(arr1[arr1.length - 1])
  arr2.shift()
  return arr2.every((num, i) => num === arr1[i])
}

// other solutions from different users

// 1.

function simonSays(arr1, arr2) {
  for (var i = 1; i < arr2.length; i++) {
    if (arr1[i - 1] != arr2[i]) return false
  }
  return true
}

// 2.
function simonSays(arr1, arr2) {
  arr1.pop()
  arr2.shift()
  return arr1.every((e, i) => e === arr2[i])
}
