// my solution

function filterUnique(arr) {
  return arr.filter((str) => str === [...new Set(str.split(''))].join(''))
}

// another solution that I found after submitting mine

const filterUnique = (arr) => arr.filter((x) => new Set(x).size == x.length)
