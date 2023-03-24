var romanToInt = function (s) {
  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const arr = s.split(""); // ["M","C","M","X","C","I","V"]
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    const current = obj[arr[i]]; // first pointer
    const next = obj[arr[i + 1]]; // second pointer
    if (current < next) { // if first pointer is less than second pointer, which means it's a special case
      result += next - current; // For example, IV = 5 - 1 = 4
      i++;
    } else {
      result += current;
    }
  }
  return result;
};
