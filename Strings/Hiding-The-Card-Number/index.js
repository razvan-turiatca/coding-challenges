// My solution

function cardHide(card) {
  return card
    .split('')
    .map((char, i) => (i < card.length - 4 ? '*' : char))
    .join('')
}

// Another solution that I found after submitting

const cardHide = (card) => '*'.repeat(card.length - 4) + card.slice(-4)

// and a regex solution

function cardHide(card) {
  return card.replace(/.(?=.{4})/g, '*')
}
