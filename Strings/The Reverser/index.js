// my solution

function reverse(str) {
  return [...str]
    .map((x) => (x == x.toLowerCase() ? x.toUpperCase() : x.toLowerCase()))
    .reverse()
    .join('')
}

// another solution

const reverse = (str) =>
  [...str].reduceRight(
    (a, b) => a + (b == b.toUpperCase() ? b.toLowerCase() : b.toUpperCase()),
    '',
  )
