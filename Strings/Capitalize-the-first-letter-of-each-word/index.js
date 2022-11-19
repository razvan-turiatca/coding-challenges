// My solution

function makeTitle(str) {
  return str
    .split(' ')
    .map((el) => el[0].toUpperCase() + el.substring(1))
    .join(' ')
}

// another solution that I found after submitting mine

let makeTitle = (x) => x.replace(/(^\w|\s\w)/g, (x) => x.toUpperCase())
