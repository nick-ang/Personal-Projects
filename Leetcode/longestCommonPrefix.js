/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  if (strs.length === 0) {
    return '';
  }
  if (strs === 1) {
    return strs[0];
  }
  strs.sort();
  const returnArray = [];
  for (let i = 0; i < strs[0].length; i += 1) {
    // convert first to array => [F,I,R,S,T]
    if (strs[0].charAt(i) === strs[strs.length - 1].charAt(i)) {
      returnArray.push(strs[0].charAt(i));
    } else {
      break;
    }
  }
  return returnArray.join('');
};

const str = ["flower", "flower", "flower", "flower"];
console.log(longestCommonPrefix(str));
