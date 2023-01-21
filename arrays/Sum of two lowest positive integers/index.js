// my solution

function sumTwoSmallestNumbers(numbers) {
  return numbers
    .sort((a, b) => b - a)
    .slice(-2)
    .reduce((x, y) => x + y, 0)
}

// second solution

function sumTwoSmallestNumbers(numbers) {
  numbers = numbers.sort(function (a, b) {
    return a - b
  })
  return numbers[0] + numbers[1]
}
