// My solution

function countLoneOnes(n) {
  let count = 0
  let str = n.toString()

  for (let i = 0; i < str.length; i++) {
    if (str[i] == 1 && str[i + 1] != 1 && str[i - 1] != 1) {
      count++
    }
  }
  return count
}

// other solutions that I found after submitting mine

const countLoneOnes = (n) => ('' + n).replace(/1{2,}|[^1]/g, '').length

// and another one

function countLoneOnes(n) {
  return [...String(n)].filter(
    (n, i, arr) => n == 1 && arr[i + 1] != 1 && n == 1 && arr[i - 1] != 1,
  ).length
}
