// my solution

function clearFog(str) {
  return [...str].filter((x) => !'fogFOG'.includes(x)).length == str.length
    ? "It's a clear day!"
    : [...str].filter((x) => !'fogFOG'.includes(x)).join('')
}

// regex solution

function clearFog(str) {
  return !/[fog]/gi.test(str) ? "It's a clear day!" : str.replace(/[fog]/gi, '')
}
