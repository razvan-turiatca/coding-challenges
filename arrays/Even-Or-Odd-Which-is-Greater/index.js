// My Solution

function evenOrOdd(str) {
  let odd = str.split('').filter((char) => parseInt(char) % 2 != 0)
  let even = str.split('').filter((char) => parseInt(char) % 2 === 0)
  let oddSum = odd.reduce((a, b) => parseInt(a) + parseInt(b))
  let evenSum = even.reduce((a, b) => parseInt(a) + parseInt(b))

  if (oddSum > evenSum) {
    return 'Odd is greater than Even'
  } else if (oddSum < evenSum) {
    return 'Even is greater than Odd'
  } else {
    return 'Even and Odd are the same'
  }
}

// Another solution I found

const evenOrOdd = (str) => (
  (diff = [...str].reduce((a, c) => (c % 2 ? a - +c : a + +c), 0)),
  diff < 0
    ? 'Odd is greater than Even'
    : diff > 0
    ? 'Even is greater than Odd'
    : 'Even and Odd are the same'
)
