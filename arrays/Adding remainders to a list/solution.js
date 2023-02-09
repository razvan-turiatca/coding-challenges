function solve(nums, div) {
  return nums.map((num) => num + (num % div))
}
