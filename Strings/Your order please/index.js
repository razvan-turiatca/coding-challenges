// my solution

function order(words) {
  return words
    .split(' ')
    .sort((a, b) => +a.replace(/[^0-9]/g, '') - +b.replace(/[^0-9]/g, ''))
    .join(' ')
}

// another solution

function order(words) {
  return words
    .split(' ')
    .sort(function (a, b) {
      return a.match(/\d/) - b.match(/\d/)
    })
    .join(' ')
}
