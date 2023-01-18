// first solution

function wordBuilder(letters, positions) {
  return letters.map((_, i) => letters[positions.indexOf(i)]).join('')
}

// second solution

function wordBuilder(letters, positions) {
  const sorted = []
  positions.forEach((p, i) => (sorted[p] = letters[i]))
  return sorted.join('')
}
