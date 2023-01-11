// my solution

function createPhoneNumber(numbers) {
  return `(${numbers.slice(0, 3).join('')}) ${numbers
    .slice(3, 6)
    .join('')}-${numbers.slice(5 - 9).join('')}`
}

// voted best practice

function createPhoneNumber(numbers) {
  var format = '(xxx) xxx-xxxx'

  for (var i = 0; i < numbers.length; i++) {
    format = format.replace('x', numbers[i])
  }

  return format
}
