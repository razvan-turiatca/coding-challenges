// my solution

function leaderboards(users) {
  return users.sort(
    (a, b) => b.score + 2 * b.reputation - (a.score + 2 * a.reputation),
  )
}
