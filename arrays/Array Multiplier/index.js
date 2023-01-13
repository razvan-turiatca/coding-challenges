// my solution

function multiply(arr) {
  return arr.map((x) =>
    Number.isInteger(x)
      ? x
          .toString()
          .repeat(arr.length)
          .split('')
          .map((a) => +a)
      : x.repeat(arr.length).split(''),
  )
}

// better solution

function multiply(arr) {
  return arr.map((item) => new Array(arr.length).fill(item))
}
