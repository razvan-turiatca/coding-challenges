// my solution

function calculateArrowhead(arr) {
  const a = arr
    .filter((x) => x[0] == '>')
    .map((x) => x.length)
    .reduce((a, b) => a + b, 0)
  const b = arr
    .filter((x) => x[0] == '<')
    .map((x) => x.length)
    .reduce((a, b) => a + b, 0)
  return a > b
    ? Array(a - b)
        .fill('>')
        .join('')
    : Array(b - a)
        .fill('<')
        .join('')
}

// another approach

function calculateArrowhead(arr) {
  const n = [...arr.join('')]
    .map((a) => (a == '>' ? 1 : -1))
    .reduce((x, y) => x + y)
  return n > 0 ? '>'.repeat(n) : '<'.repeat(Math.abs(n))
}
