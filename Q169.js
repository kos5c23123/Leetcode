var majorityElement = function(nums) {
    let count = 0;
    let value = 0;
    for (let i = 0; i< nums.length;i++) {
        if (count === 0){
            value = nums[i]
            count = 1
        } else if (value === nums[i]) {
            count++
        } else {
            count--
        }
    }
    return value
};