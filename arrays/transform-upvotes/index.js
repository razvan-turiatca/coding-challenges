// my solution

function transformUpvotes(str) {
  return str
    .split(' ')
    .map((num) =>
      num.includes('.') ? +num.slice(0, num.indexOf('k')) * 1000 : +num,
    )
}

// another solution

function transformUpvotes(str) {
  return str
    .split(' ')
    .map((x) => Number(x.replace('.', '').replace('k', '00')))
}
