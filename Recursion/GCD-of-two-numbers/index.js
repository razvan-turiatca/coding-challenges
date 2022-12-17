// my solution

function gcd(n1, n2, div = n2) {
  if (div == 0) return
  return n1 % div === 0 && n2 % div == 0 ? div : gcd(n1, n2, div - 1)
}

// another solution from another user

function gcd(n1, n2) {
  if (n2 == 0) return n1
  return gcd(n2, n1 % n2)
}
