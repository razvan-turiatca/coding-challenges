// my solution
function flipEndChars(str) {
  if (str.length < 2) return 'Incompatible.'
  if (typeof str != 'string') return 'Incompatible.'
  if (str[0] === str[str.length - 1]) return "Two's a pair."
  return (
    str[str.length - 1] +
    str
      .split('')
      .splice(1, str.length - 2)
      .join('') +
    str[0]
  )
}

//another solution I found

function flipEndChars(str) {
  return typeof str != 'string' || str.length < 2
    ? 'Incompatible.'
    : str[0] == str[str.length - 1]
    ? "Two's a pair."
    : str[str.length - 1] + str.slice(1, str.length - 1) + str[0]
}
