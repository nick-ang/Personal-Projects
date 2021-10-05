const isPalindrome = (string) => {
  // base case
  if (string.length === 0 || string.length === 1) {
    return true;
  }
  // part to get closer to base is cut off the ends
  // small piece of work is to cut off the ends
  if (string.charAt(0) === string.charAt(string.length - 1)) {
    return isPalindrome(string.substring(1, string.length - 1));
  }
  // if letters dont match then is not a palindrome
  return false;
};

const string = "racecar";
console.log(isPalindrome(string));
