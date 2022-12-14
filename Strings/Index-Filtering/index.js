// my solution

function indexFilter(idx, str) {
  return idx.map((num) => str.slice(num)[0].toLowerCase()).join('')
}

// another solution from a different user

const indexFilter = (x, s) => {
  return x.map((k) => s.toLowerCase()[k < 0 ? s.length + k : k]).join('')
}
