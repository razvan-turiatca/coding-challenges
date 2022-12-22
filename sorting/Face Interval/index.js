// my solutions:

//1.

function faceInterval(num) {
  return !Array.isArray(num)
    ? ':/'
    : num.includes(Math.max(...num) - Math.min(...num))
    ? ':)'
    : ':('
}

//2.

function faceInterval(num) {
  return !Array.isArray(num)
    ? ':/'
    : num.includes(num.sort((a, b) => b - a)[0] - num.sort((a, b) => a - b)[0])
    ? ':)'
    : ':('
}
