// my solution

function dashed(str) {
  return str
    .split('')
    .map((x) =>
      'aeiou'.includes(x.toLowerCase()) ? x.replace(x, `-${x}-`) : x,
    )
    .join('')
}

// regex solution

const dashed = (str) => str.replace(/([aeiou])/gi, '-$1-')
