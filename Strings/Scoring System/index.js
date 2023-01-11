// my solution

function calculateScores(str) {
  return [
    [...str].filter((x) => x == 'A').length,
    [...str].filter((x) => x == 'B').length,
    [...str].filter((x) => x == 'C').length,
  ]
}

// nother solution

const calculateScores = (str) => [
  (str.match(/A/g) || []).length,
  (str.match(/B/g) || []).length,
  (str.match(/C/g) || []).length,
]
