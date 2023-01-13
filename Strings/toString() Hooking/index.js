// my solution

String.prototype.toString = function () {
  return this.split('').reverse().join('')
}
