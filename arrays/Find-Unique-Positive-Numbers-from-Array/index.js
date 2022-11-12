// My solution

function uniqueArr(arr) {
  let uniqueNumbers = []
  arr.map(
    (num) => num > 0 && !uniqueNumbers.includes(num) && uniqueNumbers.push(num),
  )

  return uniqueNumbers
}

// Solution I found after submitting

const uniqueArr = (arr) => [...new Set(arr)].filter((v) => v > 0)
