function counterpartCharCode(char) {
  return char.toLowerCase() == char
    ? char.toUpperCase().codePointAt(0)
    : char.toLowerCase().codePointAt(0)
}
