// my solution

function maskify(str) {
  return str
    .split('')
    .map((x, i, a) => (i < a.length - 4 ? '#' : x))
    .join('')
}

// another solution using the pasStart method

const maskify = (str) => str.slice(-4).padStart(str.length, '#')
