// my solution

function sum(arr) {
  return arr.length == 0 ? 0 : arr[0] + sum(arr.slice(1))
}

//another solution

function sum(arr) {
  return arr.length === 0 ? 0 : arr.pop() + sum(arr)
}
