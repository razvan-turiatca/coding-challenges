// My Solution

function removeABC(str) {
  const excluded = ['a', 'b', 'c']
  let arr = []
  str.split('').map((char) => !excluded.includes(char) && arr.push(char))
  return arr.length == str.length ? null : arr.join('')
}

// Other solutions that I found after submitting my solution

function removeABC(str) {
  const res = str.replace(/[abc]/g, '')
  return str === res ? null : res
}

// and another one
function removeABC(str) {
  return str.match(/[abc]/gi) ? str.replace(/[abc]/gi, '') : null
}
