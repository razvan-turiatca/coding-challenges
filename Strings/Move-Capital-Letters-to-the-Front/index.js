// My solution

function capToFront(s) {
  return (
    s
      .split('')
      .filter((char) => char === char.toUpperCase())
      .join('') +
    s
      .split('')
      .filter((char) => char != char.toUpperCase())
      .join('')
  )
}

// other solutions that I found after submiting mine

function capToFront(s) {
  return s.match(/[A-Z]/g).join('') + s.match(/[a-z]/g).join('')
}
