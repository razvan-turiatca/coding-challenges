const sumFoundIndexes = (arr, n) =>
  arr.reduce((a, e, i) => a + (e === n && i), 0)

console.log(
  sumFoundIndexes(
    [
      2,
      1,
      7,
      6,
      3,
      10,
      6,
      1,
      3,
      9,
      1,
      9,
      3,
      3,
      9,
      10,
      4,
      6,
      3,
      2,
      5,
      3,
      0,
      1,
      0,
      1,
      9,
      4,
      8,
      0,
      5,
    ],
    2,
  ),
)
