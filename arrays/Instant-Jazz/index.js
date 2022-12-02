//my solution

function jazzify(arr) {
  return arr.map((item) =>
    item[item.length - 1] != 7 ? item.concat('7') : item,
  )
}

//other solutions that I found interesting

const jazzify = (arr) => arr.map((i) => (i.endsWith('7') ? i : i + '7'))
