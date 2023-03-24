var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";

  for (let i = 0; i <= strs[0].length; i++) { // i is the index of the first string, For example, "flower", "flow", "flight"
    // if the first string's index is not equal to the other strings' index, then return the first string's index
    if (!strs.every((el) => el[i] === strs[0][i])) { 
      return strs[0].slice(0, i);
    }
  }
  return strs[0];
};
