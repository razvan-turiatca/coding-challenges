// My solution

function numInStr(arr) {
  return arr.filter((el) => /\d/.test(el))
}

// Since the challenge suggests finding a different solution, this is what I came up with

function numInStr(arr) {
  let newArr = []
  arr.filter((el) => {
    //f or every char of every string I checked if the char is a number and it's different than ' '. If I found a number in a string and the newArr didn't include that string yet,
    // I would add it to the array
    for (let char of el) {
      if (!isNaN(char) && char != ' ') {
        if (!newArr.includes(el)) {
          newArr.push(el)
        }
      }
    }
  })
  return newArr
}
