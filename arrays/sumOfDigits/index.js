// Create a function that will take a number as an argument. Inside the function add the digits of the argument

const sumOfDigits = (number) =>
  number
    .toString()
    .split('')
    .reduce((a, b) => parseInt(a) + parseInt(b))

console.log(sumOfDigits(4321))
