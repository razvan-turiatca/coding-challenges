const singleOccurrence = (str) => (
  (str = str.toUpperCase()),
  str.length === 0
    ? ''
    : [...str].filter((x) => str.indexOf(x) === str.lastIndexOf(x))[0]
)
