// my solution

function isEqual(arr) {
  return (
    arr[0]
      .toString()
      .split('')
      .reduce((a, b) => a + +b, 0) ==
    arr[1]
      .toString()
      .split('')
      .reduce((a, b) => a + +b, 0)
  )
}

//another solution from a different user

function isEqual(arr) {
  return (
    eval(arr[0].toString().split('').join('+')) ==
    eval(arr[1].toString().split('').join('+'))
  )
}
