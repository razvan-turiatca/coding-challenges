// My solution

function isValid(zip) {
  return zip.split('').every((char) => !isNaN(char) && zip.length === 5)
}

// a different solution I found after submitting my answer

function isValid(zip) {
  return zip.length == 5 && !isNaN(zip)
}
