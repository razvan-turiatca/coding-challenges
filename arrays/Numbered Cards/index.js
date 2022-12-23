// my solution

function winRound(you, opp) {
  return (
    +you
      .sort((a, b) => b - a)
      .slice(0, 2)
      .join('') >
    +opp
      .sort((a, b) => b - a)
      .slice(0, 2)
      .join('')
  )
}
