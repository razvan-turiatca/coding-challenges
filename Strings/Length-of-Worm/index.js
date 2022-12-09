// my solution

function wormLength(worm) {
  return worm.split('').some((ch) => ch != '-') || worm.split('') == ''
    ? 'invalid'
    : worm.length * 10 + ' mm.'
}

// another solution

const wormLength = (worm) =>
  (/^-+$/.test(worm) && `${worm.length}0 mm.`) || 'invalid'
