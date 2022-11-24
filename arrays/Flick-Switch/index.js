// my solution

function flickSwitch(arr) {
  let flick = true
  let newArr = arr.map((el) => {
    if (el == 'flick') {
      flick = !flick
      return flick
    } else {
      return flick
    }
  })
  return newArr
}

// a nicer solution that I found after I submitted mine

function flickSwitch(arr) {
  let b = true
  return arr.map((x) => (x === 'flick' ? (b = !b) : b))
}
