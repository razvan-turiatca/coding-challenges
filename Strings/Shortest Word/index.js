// my solution

function findShort(s) {
  return s.split(' ').sort((a, b) => a.length - b.length)[0].length
}

// another solution
function findShort(s) {
  return Math.min.apply(
    null,
    s.split(' ').map((w) => w.length),
  )
}
