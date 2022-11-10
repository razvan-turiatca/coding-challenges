// My solution
// I went for the classic nested loop to find if the sum between the current and any other element in the array equals the given number.

function checkSum(arr, n) {
  for (let i = 0; i <= arr.length; i++) {
    for (let j = 0; j <= arr.length; j++) {
      if (arr[j] + arr[i] === n) {
        return true
      }
    }
  }
  return false
}

// after I submited I checked the other solutions and I found this one to be very interesting, even though still O of n squared.

function checkSum(arr, n) {
  return arr.some((item) => arr.includes(n - item))
}
