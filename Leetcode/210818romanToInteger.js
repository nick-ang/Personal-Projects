// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// create function to determine value of char
// if r = I etc return 1
// use a hashmap
// const value = (r) => {
//   const a = {};
//   a["I"] = 1;
//   a["V"] = 5;
//   a["X"] = 10;
//   a["L"] = 50;
//   a["C"] = 100;
//   a["D"] = 500;
//   a["M"] = 1000;
//   const val = a[r];
//   return val;
// };

// create function to iterate thorugh the S string and check value
const romanToInteger = (s) => {
  // iterate through s
  const a = {};
  a["I"] = 1;
  a["V"] = 5;
  a["X"] = 10;
  a["L"] = 50;
  a["C"] = 100;
  a["D"] = 500;
  a["M"] = 1000;
  const result = [];
  for (let i = 0; i < s.length; i++) {
    const r = s.charAt(i);
    const val = a[r];
    result.push(val);
  }
  // check if any have previous
  let final = 0;
  for (let j = 0; j < result.length; j++) {
    if (result[j] < result[j + 1]) {
      final += result[j + 1] - result[j] - result[j + 1];
    } else {
      final += result[j];
    }
  }
  return final;
};
// compare if second number is greater than first return second - first

// test
const s = "III";
console.log(romanToInteger(s));
