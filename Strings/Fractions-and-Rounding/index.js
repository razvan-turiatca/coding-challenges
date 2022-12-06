// My solution

function fracRound(frac, n) {
  return `${frac} rounded to ${n} decimal places is ${(
    frac.split('/')[0] / frac.split('/')[1]
  ).toFixed(n)}`
}

// other solutions from other users

// 1.
const fracRound = (f, n) =>
  `${f} rounded to ${n} decimal places is ${eval(f).toFixed(n)}`
