// my solution

function emphasise(str) {
  return str.length > 0
    ? str
        .toLowerCase()
        .split(' ')
        .map((word) => word[0].toUpperCase().concat(word.slice(1)))
        .join(' ')
    : str
}

// another solution I found

function emphasise(str) {
  return str.toLowerCase().replace(/\b./g, (m) => m.toUpperCase())
}
