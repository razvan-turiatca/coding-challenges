// my solution

function initialize(names) {
  return names.map((name) =>
    name
      .split(' ')
      .map((l) => `${l[0]}. `)
      .join('')
      .trim(),
  )
}

// another solution

function initialize(names) {
  return names.map((x) => x.replace(/\B[a-z]+/gi, '.'))
}
