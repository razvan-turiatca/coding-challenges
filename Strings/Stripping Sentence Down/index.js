// my solution

function stripSentence(str, chars) {
  return str
    .split('')
    .filter((x) => !chars.includes(x))
    .join('')
}

// regex solution

const stripSentence = (s, c) => s.replace(RegExp(`[${c}]`, 'g'), '')
