const likeOrDislike = (arr) =>
  arr.reduce((a, b) => (a === b ? 'Nothing' : b), 'Nothing')
