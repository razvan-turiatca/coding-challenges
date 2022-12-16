// my solution

function isPalindrome(str) {
  if (str.length == 0 || str.length == 1) return true
  return str.split('').pop() == str.split('').shift()
    ? isPalindrome(str.slice(1, -1))
    : false
}

// other solutions

//1.
const isPalindrome = (str) =>
  str.length < 2
    ? true
    : str.endsWith(str[0])
    ? isPalindrome(str.slice(1, -1))
    : false

//2.
function isPalindrome(str) {
  if (str === '') return true
  if (str[0] !== str[str.length - 1]) return false
  return isPalindrome(str.slice(1, -1))
}
