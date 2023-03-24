var searchRange = function(nums, target) {
    let first = 0
    let last = nums.length - 1
    let indexOne = -1
    let indexTwo = -1
    while (first <= last && (indexOne === -1 || indexTwo === -1)) {
        if (nums[first] === target && indexOne === -1) {
            indexOne = first
        }
        if (nums[last] === target && indexTwo === -1) {
            indexTwo = last
        }
        if (indexOne === -1) {
            first++
        }
        if (indexTwo === -1) {
            last--
        }
    }
    return [indexOne, indexTwo]
};