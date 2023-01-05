// my solution

function solution(string) {
  return string
    .split('')
    .map((x) => (x == x.toUpperCase() ? ` ${x}` : x))
    .join('')
}

// regex solution

function solution(string) {
  return string.replace(/([A-Z])/g, ' $1')
}
