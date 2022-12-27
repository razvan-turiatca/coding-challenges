// my solutions

function DECIMATOR(str) {
  return str
    .split('')
    .reverse()
    .slice(Math.ceil(str.length / 10))
    .reverse()
    .join('')
}

function DECIMATOR(str) {
  return str.slice(0, str.length - Math.ceil(str.length / 10))
}

