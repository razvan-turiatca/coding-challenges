// my solution

function divCon(x) {
  return (
    x.filter((n) => typeof n === 'number').reduce((a, b) => a + b, 0) -
    x.filter((n) => typeof n === 'string').reduce((a, b) => +a + +b, 0)
  )
}

// a shorter solution

function divCon(x) {
  return x.reduce(
    (acc, cur) => (typeof cur === 'number' ? acc + cur : acc - Number(cur)),
    0,
  )
}
