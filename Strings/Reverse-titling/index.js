//my solution

function reverseTitle(s) {
  return s
    .split(' ')
    .map((x) => x[0].toLowerCase('') + x.slice(1).toUpperCase())
    .join(' ')
}

// regex solution

const reverseTitle = (s) =>
  s.replace(/\w+?(?=\b)/g, (m) => m[0].toLowerCase() + m.slice(1).toUpperCase())
