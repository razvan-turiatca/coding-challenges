const endsAddTo10 = (nums) =>
  nums
    .map((e) => +String(Math.abs(e))[0] + +String(e).slice(-1))
    .filter((e) => e == 10).length
