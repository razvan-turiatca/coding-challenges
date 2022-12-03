// my solution

function factorChain(arr) {
  let count = 0
  for (let i = 1; i < arr.length; i++) {
    arr[i] % arr[i - 1] == 0 && count++
  }
  return count == arr.length - 1
}

// another solution I found after

const factorChain = (arr) => arr.slice(1).every((num, i) => num % arr[i] === 0)
