// my solution

function isValidPhoneNumber(str) {
  return str.replace(/\d/g, 'x') === '(xxx) xxx-xxxx'
}
