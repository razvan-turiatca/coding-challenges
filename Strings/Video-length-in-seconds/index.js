// My solution

function minutesToSeconds(time) {
  let arr = time.split(':')
  return arr[1] < 60 && arr[0] * 60 + +arr[1]
}

// I found a similar solution involving destructurin

const minutesToSeconds = (time) => {
  let [minutes, seconds] = time.split(':').map(Number)
  return seconds < 60 ? minutes * 60 + seconds : false
}
