// my solution using nested loops

function simpleEncoder(str) {
  let newStr = ''
  let arr = str.split('')
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (str[i].toLowerCase() == str[j].toLowerCase() && j != i) {
        newStr += ']'
        break
      }
    }
    if (newStr.length <= i) {
      newStr += '['
    }
  }
  return newStr
}

// a better solution from Mubashir Hassan

function simpleEncoder(str) {
  return str
    .toLowerCase()
    .split('')
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '[' : ']'
    })
    .join('')
}
