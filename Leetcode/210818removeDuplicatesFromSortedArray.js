/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  // split nums to array
  // loop through array
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        nums[i] = "_";
        k += 1;
      }
    }
  }
  // check if duplicate exists, if yes, remove and increment k
  // return k
  // return k;
  // return array
  const sorted = nums.sort();
  return sorted;
  // return k;
};

const test = [1, 1, 2];
console.log(removeDuplicates(test));
