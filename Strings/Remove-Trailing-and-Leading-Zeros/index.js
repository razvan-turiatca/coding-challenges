// my solution

function removeLeadingTrailing(n) {
  return parseFloat(n).toString()
}

// other solutions that I found on other members

//1.
function removeLeadingTrailing(n) {
  return Math.abs(n)
}

//2.
const removeLeadingTrailing = (n) => '' + +n

//3.

function removeLeadingTrailing(n) {
  return String(+n)
}
