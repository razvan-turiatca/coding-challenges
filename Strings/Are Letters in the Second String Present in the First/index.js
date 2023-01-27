// my solution

function letterCheck(arr) {
  return [...arr[1]].every((x) => arr[0].toLowerCase().includes(x))
}
