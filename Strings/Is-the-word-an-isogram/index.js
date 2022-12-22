// my solution

function isIsogram(str) {
  return str.toUpperCase() == [...new Set(str.toUpperCase().split(''))].join('')
}

// other solutions from other users

//1.
function isIsogram(str) {
  return !/(\w).*\1/i.test(str)
}

//2.

function isIsogram(str) {
  return str.length === new Set(str.toLowerCase()).size
}

//3.

function isIsogram(str) {
  return !str.match(/(.).*\1/gi)
}
