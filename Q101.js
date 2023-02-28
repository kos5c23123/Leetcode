const check = (left, right) => {
// if left is null or right is null
// if right and left are not null and left.val is not equal to right.val
  if (
    (!left && right) ||
    (!right && left) ||
    (right && left && left.val !== right.val)
  ) {
    return false;
  }
  // if left and right are not null
  if (left && right) {
    // mirror check
    return check(left.left, right.right) && check(left.right, right.left);
  }
  // if left and right are null, the value is same and return true
  return true;
};

// Main function with recursion
var isSymmetric = function (root) {
  let current = root;
  let right = current.right;
  let left = current.left;
  return check(left, right);
};
