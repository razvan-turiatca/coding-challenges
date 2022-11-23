// My solution

function textToNumberBinary(str) {
  let arr = str.split(' ')
  let newArr = []
  arr.map((word) => {
    word.toLowerCase() == 'one' && newArr.push('1')
    word.toLowerCase() == 'zero' && newArr.push('0')
  })
  return newArr.splice(0, Math.floor(newArr.length / 8) * 8).join('')
}

// other solution

const textToNumberBinary = (str) => {
  const cleanStr = str
    .replace(/zero/gi, '0')
    .replace(/one/gi, '1')
    .replace(/[^01]/g, '')

  const strLength = Math.floor(cleanStr.length / 8) * 8

  return cleanStr.slice(0, strLength)
}
