var sortColors = function (nums) {
  let z = [],
    one = [],
    two = [];
  for (let num of nums) {
    if (num === 0) z.push(0);
    if (num === 1) one.push(1);
    if (num === 2) two.push(2);
  }
  nums.length = 0;
  nums.push(...z, ...one, ...two);
};
