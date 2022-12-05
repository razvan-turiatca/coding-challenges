// my solution

function sharedLetters(str1, str2) {
  return str1
    .split('')
    .filter(
      (x, i) => !str1.slice(0, i).includes(x) && str2.split('').includes(x),
    ).length
}

// other solutions found

//1.
function sharedLetters(str1, str2) {
  return [...new Set(str1)].filter((x) => str2.includes(x)).length

  //2.

  function sharedLetters(str1, str2) {
    return [...str2].filter((e) => str1.includes(e)).length
  }
}
