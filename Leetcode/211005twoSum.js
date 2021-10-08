const twoSum = (array, target) => {
  const result = [];
  for (let i = 0; i < array.length; i += 1) {
    for (let j = i + 1; j < array.length; j += 1) {
      if (array[i] + array[j] === target) {
        result.push(j);
        result.push(i);
      }
    }
  }
  return result;
};

var twoSum = function (nums, target) {
  var mapping = {};
  for (let i = 0; i < nums.length; i++) {
    if (mapping[nums[i]] >= 0) {
      return [mapping[nums[i]], i];
    }
    mapping[target - nums[i]] = i;
  }
};

// Key is to subtract from the target and use a hashmap and map the value to the index

const array = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(array, target));
