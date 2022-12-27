// my solution

function multiplyNums(nums) {
  return nums.split(', ').reduce((acc, cur) => acc * +cur, 1)
}
