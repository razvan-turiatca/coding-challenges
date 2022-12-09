// my solution

function countOverlapping(intervals, point) {
  return intervals.filter((a) => point >= a[0] && point <= a[1]).length
}

// another solution that I found from another user

const countOverlapping = (intervals, num) =>
  intervals.reduce((total, [min, max]) => total + (min <= num && num <= max), 0)
