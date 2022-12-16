// my solution

function amplify(num) {
  return Array(num)
    .fill(1)
    .map((num, i) => ((num + i) % 4 ? num + i : (num + i) * 10))
}

// other solutions from other users

amplify = (n) => (n == 1 ? [1] : amplify(n - 1).concat([n % 4 ? n : n * 10]))
