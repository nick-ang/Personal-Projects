function countingValleys(steps, path) {
  // Write your code here
  const hash = {};
  hash["U"] = 1;
  hash["D"] = -1;
  let alt = 0;
  let count = 0;
  for (let i = 0; i < steps; i++) {
    const letter = path.charAt(i);
    const inc = hash[letter];
    alt += inc;
    if (alt === 0 && letter === "U") {
      count += 1;
    }
  }
  // if (count - 1 >= 0) {
  return count;
  // }
  // return 0;

  // loop through steps if u +1, if d-1 and increment net altitude
  // if net altitude = 0 then add one to valley count
}

const test = "UDDDUDUU";
const step = 8;
console.log(countingValleys(step, test));

// checked solution after 1 hr
// copied solution;
