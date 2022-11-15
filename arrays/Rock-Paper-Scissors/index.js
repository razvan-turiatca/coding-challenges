// My soolution

function calculateScore(games) {
  let abigailWins = 0
  let bensonWins = 0

  games.map((game, i) => {
    if (game[0] === 'R') {
      if (game[1] === 'P') {
        bensonWins++
      } else if (game[1] === 'S') {
        abigailWins++
      }
    } else if (game[0] == 'P') {
      if (game[1] === 'R') {
        abigailWins++
      } else if (game[1] === 'S') {
        bensonWins++
      }
    } else if (game[0] === 'S') {
      if (game[1] === 'P') {
        abigailWins++
      } else if (game[1] === 'R') {
        bensonWins++
      }
    }
  })
  if (bensonWins > abigailWins) {
    return 'Benson'
  } else if (bensonWins < abigailWins) {
    return 'Abigail'
  } else {
    return 'Tie'
  }
}

// Another solution I found after submitting mine

function calculateScore(games) {
  var d = {
    R: { R: 0, S: 1, P: -1 },
    S: { R: -1, S: 0, P: 1 },
    P: { R: 1, S: -1, P: 0 },
  }
  var r = 0
  for (var i in games) {
    r += d[games[i][0]][games[i][1]]
  }
  if (r == 0) return 'Tie'
  if (r > 0) return 'Abigail'
  return 'Benson'
}
