// solution

function countConsonants(str) {
  return new Set(str.toLowerCase().replace(/[^a-z]|[aeiou]/g, '')).size
}
