// My Solution

function indexShuffle(str) {
  let oddStr = ''
  let evenStr = ''
  for (let i = 0; i < str.length; i++) {
    i % 2 === 0 ? (evenStr += str[i]) : (oddStr += str[i])
  }
  return evenStr.concat(oddStr)
}

indexShuffle('abcdef')
indexShuffle('abababab')
indexShuffle('it was a beautiful day')
indexShuffle('maybe')
indexShuffle('holiday')

// A better solution I found after

function indexShuffle(str) {
  return [...str]
    .filter((v, i) => i % 2 == 0)
    .concat([...str].filter((v, i) => i % 2 != 0))
    .join('')
}
