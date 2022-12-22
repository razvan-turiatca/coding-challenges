// my solution

function boxSeq(step) {
  return step == 0 ? 0 : step % 2 ? step + 2 : step
}

// another solution by a different member

function boxSeq(step) {
  return step + (step % 2) * 2
}
