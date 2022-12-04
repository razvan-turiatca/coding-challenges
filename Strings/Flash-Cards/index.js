// my solution

function flash([num1, op, num2]) {
  if (num2 === 0 && op === '/') return undefined
  let res = 0
  switch (op) {
    case '+':
      res = num1 + num2
      break
    case '/':
      res = +(num1 / num2).toFixed(2)
      break
    case 'x':
      res = num1 * num2
      break
    case '-':
      res = num1 - num2
      break
  }
  return res
}

// another solution with regex

function flash([num1, op, num2]) {
  return num2 == 0 && op == '/'
    ? undefined
    : +eval(num1 + op.replace('x', '*') + num2).toFixed(2)
}
