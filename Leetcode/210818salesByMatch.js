function sockMerchant(n, ar) {
  // Write your code here
  // sort array
  ar.sort();
  // loop thorugh array
  let res = 0;
  for (let i = 0; i < n; i++) {
    if (ar[i] === ar[i + 1]) {
      i++;
      res++;
    }
  }
  return res;
}

const test = [1, 2, 1, 2, 1, 3, 2];
const m = 7;
console.log(sockMerchant(m, test));
