var singleNumber = function(nums) {
    let obj = {}
    for (let i = 0; i < nums.length ; i++) {
        const currentValue = nums[i]
        if (obj[currentValue] === undefined) {
            obj[currentValue] = true
        } else if (obj[currentValue]) {
            obj[currentValue] = false
        }
    }
    for (const property in obj) {
        if (obj[property]) return property
    }
};