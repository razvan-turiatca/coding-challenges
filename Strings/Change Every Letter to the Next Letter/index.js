// my solution

function move(word) {
  return [...word].map((l) => String.fromCharCode(l.charCodeAt(0) + 1)).join('')
}
