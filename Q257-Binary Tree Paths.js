var binaryTreePaths = function (root) {
  let arr = []; // create a global array to store all the paths
  const looproot = (root, newArr) => {
    if (root) {
      newArr.push(root.val); // if root is not null, push the value to the new array
      if (root.left === null && root.right === null) {
        arr.push([...newArr]); // if root is a leaf, push the new array to the global array
      }
      looproot(root.left, [...newArr]);
      looproot(root.right, [...newArr]);
    }
  };

  looproot(root, []);
  const ans = arr.map((el) => el.join("->")); // join the array with "->"
  return ans;
};
