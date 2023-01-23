function stmid(str) {
  return str
    .split(' ')
    .map((word) =>
      word.length % 2 ? word.charAt(Math.floor(word.length / 2)) : word[0],
    )
    .join('')
}
