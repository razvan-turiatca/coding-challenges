function squareDigits(num) {
  return +num
    .toString()
    .split('')
    .map((d) => +d * +d)
    .join('')
}
