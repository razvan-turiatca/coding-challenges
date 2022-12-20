// my solutions

// 1.

function highAndLow(numbers) {
  let nums = numbers.split(' ').map((s) => +s)
  return [Math.max(...nums), Math.min(...nums)].join(' ')
}

//2.
function highAndLow(numbers) {
  return [
    Math.max(...numbers.split(' ').map((s) => +s)),
    Math.min(...numbers.split(' ').map((s) => +s)),
  ].join(' ')
}

//3.
function highAndLow(numbers) {
  return [
    numbers
      .split(' ')
      .map((s) => +s)
      .sort((a, b) => b - a)[0],
    numbers
      .split(' ')
      .map((s) => +s)
      .sort((a, b) => a - b)[0],
  ].join(' ')
}

//other solutions from other members

//4.

function highAndLow(numbers) {
  numbers = numbers.split(' ').map(Number)
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers)
}

//5.

function highAndLow(numbers) {
  numbers = numbers.split(' ')
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`
}
