var reverseString = function(s) {
    let lower = 0
    let fast = s.length - 1
    while (lower <= fast) {
        let temp = s[lower]
        s[lower] = s[fast]
        s[fast] = temp
        lower++
        fast--
    }
};