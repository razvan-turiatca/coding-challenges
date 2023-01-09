// my solution

function mergeSort(arr1, arr2) {
  return arr1[0] > arr1[1]
    ? [...arr1, ...arr2].sort((a, b) => b - a)
    : [...arr1, ...arr2].sort((a, b) => a - b)
}

// another solution

const mergeSort = (a1, a2) =>
  [...a1, ...a2].sort((a, b) => (a1[0] < a1[1] ? a - b : b - a))
