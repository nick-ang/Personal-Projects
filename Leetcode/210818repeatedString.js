// checked at: 1 hr later, dunno how to solve infinite
// s = string that gets repeated
// n = check thr first n characters of the infinite string
// PRINT NUMBER OF LETTER a's in the first n letters of infinite string

function repeatedString(s, n) {
  // Write your code here
  // create infinite string untill n is reached
  // check how many remaining letter's there are if you tried to append a string untill string.length = n
  const remaining = n % s.length;
  // check how many times you would have to append str to reach a string of length n before adding a
  const m = (n - remaining) / s.length;
  let count = 0;
  // loop through infinite string and each time you hit a add m the append times +1 extra for remaining if i < remaining)
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === "a") {
      count += m + (i < remaining);
    }
  }
  return count;

  // Solution 2 with splice

  // split string everytime an a occurs and get the length of the array
  // const array = s.split("a");
  // // calculate how many a's in string
  // const occurances = array.length - 1;
  // // calculate how many possible combos
  // const max = Math.floor(n / s.length);
  // let totalAs = occurances * max;
  // totalAs += s.slice(0, n % s.length).split("a").length - 1;
  // return totalAs;
}

const test = "aba";
const no = 10;
console.log(repeatedString(test, no));
