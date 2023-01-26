// 1.

function percentFilled(box) {
  let freeSpace = 0
  let occSpace = 0
  box.forEach((string) =>
    string.split('').forEach((char) => {
      if (char === 'o') {
        occSpace++
      } else if (char == ' ') {
        freeSpace++
      }
    }),
  )
  return `${Math.round((occSpace * 100) / (freeSpace + occSpace))}%`
}

//2.

function percentFilled(box) {
  let arr = [...box.join('')],
    fil = arr.filter((v) => v === 'o').length,
    tot = arr.filter((v) => v !== '#').length
  return `${Math.round((fil / tot) * 100)}%`
}

//3.

function percentFilled(box) {
  const max = (box.length - 2) * (box[0].length - 2)
  const o = (box.join('').match(/o/g) || []).length
  return `${Math.round((o / max) * 100)}%`
}
