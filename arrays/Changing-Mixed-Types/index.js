// my solution

function changeTypes(arr) {
  return arr.map((el) =>
    typeof el == 'string'
      ? `${el[0].toUpperCase().concat(el.slice(1))}!`
      : typeof el == 'boolean'
      ? !el
      : typeof el == 'number' && el % 2 == 0
      ? el + 1
      : el,
  )
}

// another slightly different solution

const changeTypes = (arr) =>
  arr.map((el) =>
    typeof el === 'string'
      ? el.charAt(0).toUpperCase() + el.slice(1) + '!'
      : typeof el === 'boolean'
      ? !el
      : el % 2 === 0
      ? (el += 1)
      : el,
  )
