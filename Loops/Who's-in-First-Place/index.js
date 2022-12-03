// my solution

function firstPlace(road) {
  let arr = road.split('')
  if (arr.length == 0) return 'No road available'
  return arr.every((char) => char === '=')
    ? 'No car available'
    : arr.filter((char) => char != '=').pop()
}

// another solution that I found later

const firstPlace = (road) => {
  const r = [...road]
  if (!r.length) {
    return 'No road available'
  }
  return r.reverse().find((a) => a != '=') || 'No car available'
}
