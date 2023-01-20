// my solution

function getProducts(arr) {
  return arr.map((x, i, a) =>
    a.filter((n) => n != arr[i]).reduce((p, q) => p * q, 1),
  )
}
