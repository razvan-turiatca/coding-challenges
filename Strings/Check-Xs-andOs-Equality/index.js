// My solution

function XO(str) {
  return (
    str.split('').filter((a) => a.toLowerCase() === 'x').length ===
    str.split('').filter((a) => a.toLowerCase() === 'o').length
  )
}

// other solution that I found after submitting mine

function XO(str) {
  return str.replace(/[^x]/gi, '').length === str.replace(/[^o]/gi, '').length
}
