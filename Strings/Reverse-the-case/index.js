// My solution

function reverseCase(str) {
  return [...str]
    .map((char) =>
      char.toUpperCase() === char
        ? (char = char.toLowerCase())
        : (char = char.toUpperCase()),
    )
    .join('')
}
