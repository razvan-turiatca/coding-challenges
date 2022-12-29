// my solution

function isAnagram(s1, s2) {
  return s1.length != s2.length
    ? false
    : s1.split('').every((x) => s2.toLowerCase().includes(x.toLowerCase()))
}

// another approach:

//1.
function isAnagram(s1, s2) {
  var str1 = s1.toLowerCase().split('').sort().join('').trim()
  var str2 = s2.toLowerCase().split('').sort().join('').trim()
  return str1 === str2
}
//2.

function isAnagram(s1, s2) {
  const resolve = (s) => Array.from(s.toLowerCase()).sort().join('')
  return resolve(s1) === resolve(s2)
}
