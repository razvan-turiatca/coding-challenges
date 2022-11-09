// My solution

function removeSpecialCharacters(str) {
  return str.replace(/[^A-Za-z0-9\s\_\-]/g, '')
}

console.log(removeSpecialCharacters('%fd76$fd(-)6GvKlO.'))
