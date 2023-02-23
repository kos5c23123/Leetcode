var merge = function (nums1, m, nums2, n) {
  // i = nums1 index which have value
  // j = nums2 index
  // k = nums1 last index
  let i = m - 1,
    j = n - 1,
    k = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] < nums2[j]) {
      // nums1 last index = nums2 last index
      nums1[k] = nums2[j];
      j--;
    } else {
      // nums1 last index = nums1 index of last value
      nums1[k] = nums1[i];
      i--;
    }
    k--;
  }

  while (i >= 0) {
    nums1[k--] = nums1[i--];
  }
  while (j >= 0) {
    nums1[k--] = nums2[j--];
  }
};
