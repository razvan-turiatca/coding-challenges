// my solution

var capitals = function (word) {
  return word.split('').reduce((acc, cur, i) => {
    if (cur == cur.toUpperCase()) {
      acc = [...acc, i]
    }
    return acc
  }, [])
}

// another solution

var capitals = function (word) {
  return word.split('').reduce(function (memo, v, i) {
    return v === v.toUpperCase() ? memo.concat(i) : memo
  }, [])
}
