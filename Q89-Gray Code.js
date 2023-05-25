var grayCode = function (n) {
  let max = Math.pow(2, n) - 1; // 2^n - 1 find the max number

  let ans = [];
  for (let i = 0; i <= max; i++) { 
    ans.push(i ^ (i >> 1)); 
    /** 
     * Example n = 3 & ^ = XOR
     * XOR table:
     * 0 ^ 0 = 0
     * 0 ^ 1 = 1
     * 1 ^ 0 = 1
     * 1 ^ 1 = 0
     * 
     * 0 ^ (0 >> 1) = 0000(2) ^ 0000(2) = 0(2) = 0(10)
     * 1 ^ (1 >> 1) = 0001(2) ^ 0000(2) = 1(2) = 1(10)
     * 2 ^ (2 >> 1) = 0010(2) ^ 0001(2) = 3(2) = 3(10)
     * 3 ^ (3 >> 1) = 0011(2) ^ 0001(2) = 2(2) = 2(10)
    */
  }
  return ans;
};
