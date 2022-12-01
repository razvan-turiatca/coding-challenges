// my solution

function peelLayerOff(arr) {
  arr.shift()
  arr.pop()
  arr.map((innerArr) => innerArr.pop() && innerArr.shift())
  return arr
}

// found a better solution from another user

const peelLayerOff = (r) => r.slice(1, -1).map((c) => c.slice(1, -1))
