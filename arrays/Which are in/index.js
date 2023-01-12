// my solution

function inArray(array1, array2) {
  return array2
    .reduce((a, b) => {
      a = [...a, ...array1.filter((x) => !a.includes(x) && b.includes(x))]
      return a
    }, [])
    .sort()
}

// other solutions

//1.

function inArray(a1, a2) {
  return a1.filter((sub) => a2.some((whole) => whole.includes(sub))).sort()
}

//2.

function inArray(array1, array2) {
  return array1.filter((e) => array2.join(' ').includes(e)).sort()
}
