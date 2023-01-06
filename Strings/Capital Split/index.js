// my solution

function capSpace(txt) {
  return [...txt]
    .map((x) =>
      x.toUpperCase() == x ? x.replace(x, ` ${x.toLowerCase()}`) : x,
    )
    .join('')
}

// regex solution

function capSpace(txt) {
  return txt.replace(/[A-Z]/g, (letter) => ` ${letter.toLowerCase()}`)
}
