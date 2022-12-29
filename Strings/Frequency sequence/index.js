// my solution

function freqSeq(str, sep) {
  return str
    .split('')
    .map(
      (x, i, a) =>
        str
          .split('')
          .filter((a) => a == x)
          .length.toString() + sep,
    )
    .join('')
    .slice(0, str.length * 2 - 1)
}

// solution with the most votes

function freqSeq(str, sep) {
  return str
    .split('')
    .map((v, i, arr) => arr.filter((vi) => vi === v).length)
    .join(sep)
}
