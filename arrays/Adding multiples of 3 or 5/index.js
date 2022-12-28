// my solution

function solution(number) {
  return number >= 0
    ? Array(number)
        .fill(0)
        .map((x, i) => x + i)
        .filter((x) => x % 3 == 0 || x % 5 == 0)
        .reduce((a, b) => a + b, 0)
    : 0
}

// another solution

function solution(number) {
  return number < 3
    ? 0
    : [...Array(number).keys()]
        .map((int) => (int % 3 === 0 || int % 5 === 0 ? int : 0))
        .reduce((a, b) => a + b)
}

// or for loop
function solution(number) {
  sum = 0
  for (i = 3; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i
    }
  }
  return sum
}
