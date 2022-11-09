// My solution

function countPosSumNeg(arr) {
  let positiveCount = ''
  let negativeSum = 0

  arr.map((num) => (num < 0 ? (negativeSum += num) : positiveCount++))

  return arr.length > 0 ? [positiveCount, negativeSum] : []
}

console.log(countPosSumNeg([92, 6, 73, -77, 81, -90, 99, 8, -85, 34]))

// After submiting my solution I found this interesting solution posted by another user:

function countPosSumNeg(nums) {
  return nums && nums[0]
    ? [
        nums.filter((a) => a >= 0).length,
        nums.filter((a) => a < 0).reduce((a, b) => a + b, 0),
      ]
    : []
}
