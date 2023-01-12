// my solution

function splitCode(item) {
  return [
    [...item].filter((x) => x.match(/[A-Z]/)).join(''),
    +[...item].filter((x) => x.match(/[0-9]/)).join(''),
  ]
}

// other solutions

//1.
function splitCode(item) {
  const arr = item.match(/([A-Z]+)(\d+)/)
  return [arr[1], +arr[2]]
}

//2.

const splitCode = (i) => [i.match(/\D/g).join(''), +i.match(/\d/g).join('')]
