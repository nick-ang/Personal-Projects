/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  //chars into array
  let array = x.toString().split("");
  //get array length then and check if odd array or even
  const len = array.length;
  //if odd, find middle index and make two arrays from the left and right of the middle index and reverse one
  if (len%2 !== 0){
    const middle = len/2
    const arrayr = []
    const arrayl = []
    for(let i = Math.trunc(middle); i < len; i += 1){
      arrayr.push(array[i])
    };
    for(let j = Math.trunc(middle); j > -1 ; j -= 1) {
      arrayl.push(array[j]);
    };
    for (let i = 0; i < arrayl.length; i += 1) {
      console.log(i)
      if (arrayl[i] !== arrayr[i]) return false;
    }
    return true;

  } else {
    const middle = len / 2;
    const arrayr = [];
    const arrayl = [];
    for (let i = Math.trunc(middle); i < len; i += 1) {
      arrayr.push(array[i]);
    }
    for (let i = Math.trunc(middle - 1); i > -1; i -= 1) {
      arrayl.push(array[i]);
    }
    for (let i = 0; i < arrayl.length; i += 1) {
      if (arrayl[i] !== arrayr[i]) return false;
    }
    return true;
  };

  //check if arrays match and return boolean
  //else, make two arrays and reverse one
  //check if arrays match and return boolean
};


const n = 135431;

console.log(isPalindrome(n));
