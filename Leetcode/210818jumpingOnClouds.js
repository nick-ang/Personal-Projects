// checked solution at: didnt have to check
// jump on any cumulus if index = cloud index + 1 || 2
// avoud thunderheads
// find min no. of jumps
// 0 = cumulus
// 1 = dangerous
// RETURN MIN NO. OF JUMPS to last cloud

function jumpingOnClouds(c) {
  // Write your code here
  // loop through c
  let jump = 0;
  for (let i = 0; i < c.length; i++) {
    // check next two indexes you can jump to
    if (c[i + 2] === 0) {
      jump += 1;
      i += 1;
    } else if (c[i + 1] === 0) {
      jump += 1;
    }
  }
  return jump;
}

const test = [0, 1, 0, 0, 0, 1, 0];
console.log(jumpingOnClouds(test));
