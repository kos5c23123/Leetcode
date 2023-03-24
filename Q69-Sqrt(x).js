var mySqrt = function (x) {
  if (x <= 1) return x;

  let start = 0; // start index position
  let end = x; // end index position
  while (start <= end) {
    let mid = Math.floor((start + end) / 2); // middle index position
    if (mid * mid === x) return mid;
    if (mid * mid < x) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return end;
};
