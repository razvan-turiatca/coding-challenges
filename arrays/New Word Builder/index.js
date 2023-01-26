//my solution

function wordBuilder(letters, positions) {
  return positions.reduce((a, b, i) => [...a, letters[b]], []).join('')
}

// other solution

function wordBuilder(letters, positions) {
  return positions.map((v) => letters[v]).join('')
}
