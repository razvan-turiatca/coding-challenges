// my solution

function length(str) {
  return !str ? 0 : 1 + length(str.slice(1))
}
