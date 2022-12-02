//my solution

function calculateLosses(obj) {
  return Object.values(obj).length > 0
    ? Object.values(obj).reduce((a, b) => a + b)
    : 'Lucky you!'
}

// solution the someone else found

const calculateLosses = (obj) =>
  Object.values(obj).reduce((total, num) => total + num, 0) || 'Lucky you!'
