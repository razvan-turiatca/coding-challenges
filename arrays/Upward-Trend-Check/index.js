// My solution
// I used a for loop and first I check if the first element is not a string. If it isn't I check is the element is greater than the next element. If it's greater it means there isn't an upward trend and therefore I return false.
// If the element is a string I return: "Strings not permitted!"
// IF there are no strings in the loop and no elements greater than the next element, the function will return true
function upwardTrend(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (!(typeof arr[i] === 'string')) {
      if (arr[i] > arr[i + 1]) {
        return false
      }
    } else {
      return 'Strings not permitted!'
    }
  }
  return true
}

// A more elegant solution that I found after I submited mine:

const upwardTrend = (arr) =>
  arr.some((x) => typeof x === 'string')
    ? 'Strings not permitted!'
    : arr.slice(1).every((x, i) => x > arr[i])
