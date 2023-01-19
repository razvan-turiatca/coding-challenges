// my solution

function longestString(str1, str2) {
  return [...new Set(str1.concat(str2))].sort().join('')
}
