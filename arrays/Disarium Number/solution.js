function isDisarium(n) {
  return (
    n
      .toString()
      .split('')
      .reduce((sum, d, i) => sum + Math.pow(d, i + 1), 0) === n
  )
}
