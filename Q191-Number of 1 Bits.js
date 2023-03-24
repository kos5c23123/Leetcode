var hammingWeight = function(n) {
    let result = 0
    while (n > 0) {
        let current = n / 2
        if (!Number.isInteger(current)) {
            result += 1
        }
        n = Math.floor(current)
    }
    return result
};