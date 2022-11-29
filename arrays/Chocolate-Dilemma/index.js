// my solution

function testFairness(agatha, bertha) {
  return (
    agatha.map((a) => a[0] * a[1]).reduce((ac, b) => ac + b) ===
    bertha.map((a) => a[0] * a[1]).reduce((ac, b) => ac + b)
  )
}

// an easier solution that I found

function testFairness(agatha, bertha) {
  return (
    agatha.reduce((a, c) => (a += c[0] * c[1]), 0) ==
    bertha.reduce((a, c) => (a += c[0] * c[1]), 0)
  )
}
