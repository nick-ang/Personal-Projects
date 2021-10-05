const reverseString = (string) => {
  // base case
  if (string === "") {
    return "";
  }
  // the return is to get close to the base case with each recursive call and the second bit is the least amount of work
  return reverseString(string.substring(1)) + string.charAt(0);
};

const string = "hello";
console.log(string);
