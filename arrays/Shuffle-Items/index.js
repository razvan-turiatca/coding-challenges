// write a function which takes an array and returns the shuffled array

const shuffle = (arr) => {
  return arr
    .map((item) => ({ sort: Math.random(), value: item }))
    .sort((item1, item2) => item1.sort - item2.sort)
    .map((el) => el.value)
}

shuffle([1, 2, 3, 4, 5, 6, 7])
