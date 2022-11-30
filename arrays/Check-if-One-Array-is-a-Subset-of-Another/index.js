function subset(arr1, arr2) {
  return arr1.every((num) => arr2.includes(num))
}
