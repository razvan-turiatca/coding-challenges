// my solution

function stepsToConvert(str) {
  const lower = [...str].filter((a) => a == a.toLowerCase()).length
  const upper = [...str].filter((a) => a == a.toUpperCase()).length

  return Math.min(lower, upper)
}

// regex solution

function stepsToConvert(str) {
  return Math.min(
    (str.match(/[a-z]/g) || []).length,
    (str.match(/[A-Z]/g) || []).length,
  )
}
