// my solution

function arrEleSum(args) {
  return args.map((arg) => args.reduce((a, b) => a + b) - arg)
}
