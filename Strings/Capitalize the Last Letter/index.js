//my solution

function capLast(txt) {
  return txt
    .split(' ')
    .map((word) => word.slice(0, -1) + word.slice(-1).toUpperCase())
    .join(' ')
}

// a regex based solution

return txt
  .replace(/([\w]\s|[\w]$)/g, (letter) => `${letter.toUpperCase()}`)
  .trim()
