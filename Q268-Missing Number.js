var missingNumber = function(nums) {
    let originLength = nums.length + 1
    let k = 0
    let newarr = nums.sort((a,b) => a - b )
    console.log(newarr)
    for (let i = 0 ; i < originLength; i++) {
        if (newarr[i] !== k) {
            return k
        } else {
            k++
        }
    }
};