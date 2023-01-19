// my solution

function evenOddString(txt) {
  return txt
    .split('')
    .filter((x, i) => !(i % 2))
    .join('')
    .concat(' ', [...txt].filter((x, i) => i % 2).join(''))
}

// regex solution

const evenOddString = (s) =>
  s.replace(/(.)./g, '$1') + ' ' + s.replace(/.(.)?/g, '$1')
