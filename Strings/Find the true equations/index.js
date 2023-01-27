// my solution

function trueEquations(arr) {
  return arr.filter((eq) => eval(eq.split('=')[0]) === +eq.split('=')[1])
}

// other solution

function trueEquations(arr) {
  return arr.filter((eq) => eval(eq.replace('=', '==')))
}
