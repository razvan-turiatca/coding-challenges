// my solution

function wave(str) {
  return str
    .split('')
    .map(
      (l, i) =>
        l != ' ' && str.slice(0, i) + l.toUpperCase() + str.slice(i + 1),
    )
    .filter((x) => x != false)
}

// another solution

function wave(str) {
  let result = []

  str.split('').forEach((char, index) => {
    if (/[a-z]/.test(char)) {
      result.push(
        str.slice(0, index) + char.toUpperCase() + str.slice(index + 1),
      )
    }
  })

  return result
}
