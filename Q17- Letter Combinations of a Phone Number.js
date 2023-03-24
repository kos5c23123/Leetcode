var letterCombinations = function(digits) {
    const obj = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"],
    }
    const temp = digits.split("")
    let arr = []
    for (let i = 0; i < temp.length; i++) {
        arr.push(obj[temp[i]])
    }
    while (arr.length > 1) {
        const arr1 = arr.shift()
        const arr2 = arr.shift()
        let temparr = []
        for (let i = 0; i < arr1.length; i++) {
            for (let j = 0; j < arr2.length; j++) {
                let text = arr1[i] + arr2[j]
                temparr.push(text)
            }
        }arr.reverse()
        arr.push(temparr)
        arr.reverse()
    }
    return arr[0] === undefined ? [] : arr[0]
};