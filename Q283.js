var moveZeroes = function(nums) {
    let i = 0 // first index
    let j = 1 // second index
    while (j < nums.length) {
        // if first index is 0 and second index is not 0
        if (nums[i] === 0 && nums[j] !== 0 ) {
            // swap
            nums[i] = nums[j]
            nums[j] = 0
            i++
        }
        if (nums[i] !== 0) {
            i++
        }
        j++
    }
};