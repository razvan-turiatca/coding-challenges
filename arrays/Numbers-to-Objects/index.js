// my solution

function numObj(arr) {
  return arr.map((x) => ({ [x]: String.fromCharCode(x) }))
}
