var isAnagram = function(s, t) {
    if (s.length !== t.length) return false

    let arrays = s.split('').sort()
    let arrayt = t.split('').sort()

    for (let i = 0; i < arrays.length; i++) {
        if (arrays[i] !== arrayt[i]) {
            return false
        }
    }
    return true

};