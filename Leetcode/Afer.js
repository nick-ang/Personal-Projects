function mostFrequentDigits(a) {
  // split array to characters
  // declare empty hash
  const result = [];
  const hash = {};
  // loop through and append to hash
  for (let i = 0; i < a.length; i += 1) {
    const dig = a[i].toString().split('');
    for (let j = 0; j < dig.length; j += 1) {
      if (hash[dig[j]]) {
        hash[dig[j]] += 1;
      } else {
        hash[dig[j]] = 1;
      }
    }
  }
  const arr = Object.values(hash);
  const max = Math.max(...arr);
  Object.keys(hash).forEach((key) => {
    if (hash[key] === max) {
      result.push(parseInt(key, 10));
    }
  });
  return result;
}

const a = [33, 37, 25, 16, 6];
console.log(mostFrequentDigits(a));
