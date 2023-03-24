var maxArea = function(height) {
    let first = 0
    let second = height.length - 1
    let result = 0

    while(first <= second) {
        let min = Math.min(height[first], height[second])
        let dist = Math.abs(first - second)
        result = Math.max(result, min * dist)
        if (height[first] < height[second]) {
            first++
        }else {
            second--
        }
    }

    return result
    
};