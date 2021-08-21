// Hacker Rank
// Time checked
// find minimum number of elements to delete to leave elementts of equal value

function equalizeArray(arr) {
  // Write your code here
  let inc = 0;
  let m = 1;
  let item;
  // sort array
  // loop through array and test if second matches anything else
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i; j < arr.length; j += 1) {
      if (arr[i] === arr[j]) {
        inc += 1;
        if (inc > m) {
          m = inc;
          item = arr[i];
        }
      }
    }
    inc = 0;
  }
  return arr.length - m;
  // if it doesnt match, increment by 1
}

// Test
const test = [1, 1, 1, 1, 1, 3, 3, 3];
console.log(equalizeArray(test));
