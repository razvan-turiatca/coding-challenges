const dailyStreak = (arr) =>
  Math.max(
    ...arr
      .join('')
      .split('false')
      .map((x) => x.length / 4),
  )
