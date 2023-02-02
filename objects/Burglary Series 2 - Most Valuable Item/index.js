// my solution

function mostExpensiveItem(obj) {
  return Object.keys(obj).sort((a, b) => obj[b] - obj[a])[0]
}
