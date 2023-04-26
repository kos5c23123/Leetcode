var findMedianSortedArrays = function(nums1, nums2) {
    const temp = nums1.concat(nums2).sort((a, b) => a - b )
    const len = temp.length
    const isOdd = temp.length % 2 
    if (isOdd) {
        let mid = Math.floor(len / 2)
        return temp[mid]
    }else {
        let middleNum = temp[(len / 2) - 1] + temp[(len / 2)]
        return middleNum / 2
    }
}; 