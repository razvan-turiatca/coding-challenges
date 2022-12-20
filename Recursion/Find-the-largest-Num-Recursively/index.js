// recursive Solution

function largestEven(nums, maxNum = 0) {
  if (nums.every((num) => num % 2) && maxNum == 0) return -1
  if (nums.length == 0) return maxNum
  while (nums.length > 0) {
    if (nums[0] % 2 == 0) {
      maxNum = Math.max(maxNum, nums[0])
    }
    return largestEven(nums.slice(1), maxNum)
  }
}

// other solution

function largestEven(nums) {
  return Math.max(...nums.filter((num) => num % 2 == 0), -1)
}
