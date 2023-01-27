// my solution

function removeRepeats(str) {
  return str
    .split('')
    .map((x, i) => (str[i + 1] === x ? '' : x))
    .join('')
}

// another solution

//1.
function removeRepeats(str) {
  return [...str].filter((char, i) => char !== str[i + 1]).join('')
}

//2.

const removeRepeats = (s) => s.replace(/(.)\1+/g, '$1')
