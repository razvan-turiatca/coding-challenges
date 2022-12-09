//my solution

function spinAround(r) {
  return Math.abs(
    Math.round(r.reduce((a, b) => a + (b == 'right' ? 1 : -1), 0) / 4),
  )
}
