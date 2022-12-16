// my solution

function amplify(num) {
  return Array(num)
    .fill(0)
    .map((num, i) => ((num + i + 1) % 4 == 0 ? (i + 1) * 10 : i + 1))
}

// other solutions from other users

amplify = (n) => (n == 1 ? [1] : amplify(n - 1).concat([n % 4 ? n : n * 10]))
