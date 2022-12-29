// my solution :

function puzzlePieces(a1, a2) {
  return a1.length != a2.length
    ? false
    : a1.map((x, i) => x + a2[i]).every((x) => x == a1[0] + a2[0])
}

// another solution

function puzzlePieces(a1, a2) {
  return (
    a1.length === a2.length && new Set(a1.map((v, i) => v + a2[i])).size === 1
  )
}
