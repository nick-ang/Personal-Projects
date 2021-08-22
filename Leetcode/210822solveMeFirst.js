// return sum of a and b

function solveMeFirst(a, b) {
  // Hint: Type return a+b below
  let ac = 0;
  let bc = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      ac += 1;
    } else if (a[i] < b[i]) {
      bc += 1;
    }
  }
  return [ac, bc];
}
