/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  // loop through x
  if ((-2) ** 31 >= x || x >= 2 ** 31 - 1) {
    return 0;
  }

  const ret = [];
  const str = x.toString();
  for (let i = 0; i < str.length; i += 1) {
    const letter = str.charAt(i);
    ret.push(letter);
  }
  const reversed = ret.reverse();
  if (reversed.includes('-')) {
    reversed.splice(0, 0, '-');
    reversed.pop();
  } else if (reversed[0] === '0' && reversed.length > 1) {
    reversed.splice(0, 1);
  }
  const final = reversed.join('');
  const a = parseInt(final, 10);
  if ((-2) ** 31 >= a || a >= 2 ** 31) {
    return 0;
  }
  return final;
};

const test = 123;
console.log(reverse(test));
