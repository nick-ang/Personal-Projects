const climbStairs = (n) => {
  // check if step is less than 3
  if (n < 3) return n;
  // set steps
  let first = 1;
  let second = 2;
  // iterate each step
  for (let i = 2; i < n; i += 1) {
    const current = first + second;
    first = second;
    second = current;
  }

  return second;
};

const n = 4;
console.log(climbStairs(n));
