// my solution:

function findZip(str) {
  const firstZipEnd = str.indexOf('zip') + 3
  return str.slice(firstZipEnd).includes('zip')
    ? firstZipEnd + str.slice(firstZipEnd).indexOf('zip')
    : -1
}

// a better solution from a different user:

//1.
function findZip(str) {
  return str.indexOf('zip', str.indexOf('zip') + 1)
}

//2.

function findZip(str) {
  return str.replace('zip', 'xxx').search('zip')
}
