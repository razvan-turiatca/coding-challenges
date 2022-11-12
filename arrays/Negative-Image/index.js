// My solution

function reverseImage(image) {
  return image.map((arr) =>
    arr.map((num) => (num === 0 ? (num = 1) : (num = 0))),
  )
}

// another solution that I found after submitting mind, which is still O(n squared) but which I think it looks pretty nice

function reverseImage(image) {
  return image.map((v) => v.map((x) => +!x))
}
