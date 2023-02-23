var climbStairs = function (n) {
    // fibonacci sequence [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...]
    //                      \/ \/ \/ \/ \/ \/ \/  \ / \ / 
    //                       1  2  3  5  8 13 21   34  55 
    // which is the number of ways to climb to the n-th stair
  if (n <= 3) return n;
  let first = 2; 
  let second = 3;
  let result = 0;
  for (let i = 0; i < n - 3; i++) {
    result = first + second;
    if (first < second) {
      first = result;
    } else {
      second = result;
    }
  }
  return result;
};

// take time and space complexity into consideration
var climbStairs_recursion = function (n) {
  if (n <= 3) return n;
  return climbStairs(n - 1) + climbStairs(n - 2);
};
