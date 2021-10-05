const sumOfNaturalNumbers = (input) => {
  // base case for
  if (input <= 1) {
    return input;
  }
  // closer to base and small work
  return input + sumOfNaturalNumbers(input - 1);
};

const test = 10;
console.log(sumOfNaturalNumbers(test)); // 55
