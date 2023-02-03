function removeEntry(obj, itemName) {
  const copy = { ...obj }
  delete copy[itemName]
  return copy
}
