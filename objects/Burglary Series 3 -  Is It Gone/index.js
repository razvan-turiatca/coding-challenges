// my solution

function findIt(obj, name) {
  return obj.hasOwnProperty(name)
    ? name[0].toUpperCase() + name.slice(1) + ' is gone...'
    : name[0].toUpperCase() + name.slice(1) + ' is here!'
}

// another solution

function findIt(obj, name) {
  return `${name[0].toUpperCase() + name.slice(1)} is ${
    Object.keys(obj).includes(name) ? 'gone...' : 'here!'
  }`
}
