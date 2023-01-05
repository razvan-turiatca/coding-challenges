// my solution

function correctSpacing(sentence) {
  return sentence
    .split(' ')
    .filter((w) => w != '')
    .join(' ')
}

// regex solution

function correctSpacing(sentence) {
  return sentence.replace(/\s+/g, ' ').trim()
}
