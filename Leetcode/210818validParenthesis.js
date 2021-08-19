const isValid = (s) => {
  // create empty array to add non matching pairs to
  const array = [];
  // define opening and closing
  const opening = ["[", "(", "{"];
  const closing = ["]", ")", "}"];

  // loop through s
  for (let i = 0; i < s.length; i++) {
    // put opening into array (will get popped if closing match found)
    if (opening.includes(s.charAt(i))) {
      array.push(s.charAt(i));
    } else if (closing.includes(s.charAt(i))) {
      // find matching type of opening bracket using index of opening
      const pos = closing.indexOf(s.charAt(i));
      // return false if closing is the first or if closing does not match opening
      if (array.length === 0 || array[array.length - 1] !== opening[pos]) {
        return false;
      } else {
        array.pop();
      }
      // pop the opening (last element) if matching closing found
    }
  }
  // return true if array is empty i.e. no false matches
  return array.length === 0;
};

// const string = "(]";
// // ["[", "]", "{", "}"];
// console.log(isValid(string));
