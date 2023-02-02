//my solution

function thirdMostExpensive(obj) {
  return Object.keys(obj).length < 3
    ? false
    : Object.keys(obj).sort((a, b) => obj[b] - obj[a])[2]
}

//2.

const thirdMostExpensive = (obj) =>
  Object.keys(obj).sort((a, b) => obj[b] - obj[a])[2] || false
