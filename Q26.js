var removeDuplicates = function(nums) {
  // i is first pointer, j is second pointer
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
      // if the first pointer is not equal to the second pointer, 
      // then move the first pointer to the next index and assign the second pointer's value to the first pointer
      if (nums[j] !== nums[i]) {
        i++;
        nums[i] = nums[j]; // For example, [1, 1, 2] => [1, 2, 2]
      }
    }
    return i + 1;
  };