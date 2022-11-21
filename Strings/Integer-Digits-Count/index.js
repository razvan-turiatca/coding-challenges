// My solution

function count(n) {
  return n
    .toString()
    .split('')
    .filter((char) => !isNaN(char)).length
}

//other solutions

const count = (n) => String(Math.abs(n)).length
