// my solution

function findSingleNumber(numbers) {
  let nums = {}
  if (numbers.length === 0) return null
  numbers.forEach((num) => (nums[num] ? nums[num]++ : (nums[num] = 1)))
  return +Object.entries(nums).find((x) => x[1] == 1)[0]
}

// another solution from another member

let findSingleNumber = (n) => {
  return n.find((x) => n.indexOf(x) === n.lastIndexOf(x)) || null
}
