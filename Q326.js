// my code
var isPowerOfThree = function (n) {
  if (n <= 0) return false;
  let i = 0;
  let result = 0;
  while (result <= n) {
    console.log(result);
    if (result === n) return true;
    if (result > n) return false;
    result = 0;
    result = 3 ** i;
    i++;
  }
  return false;
};

//Logarithms
var isPowerOfThree = function (n) {
  let a = Math.log(n) / Math.log(3);
  return Math.abs(a - Math.round(a)) < 1e-10;
};

// Modulo
var isPowerOfThree = function (n) {
  return n > 0 && 1162261467 % n === 0;
};
