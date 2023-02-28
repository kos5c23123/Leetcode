var generate = function (numRows) {
  let result = [];
  let currentLayer = [];
  for (let i = 0; i < numRows; i++) {
    currentLayer = [];
    if (i >= 1) {
      currentLayer.push(1);
    }
    for (j = 0; j < i - 1; j++) {
      const temp = result[i - 1][j] + result[i - 1][j + 1];
      currentLayer.push(temp);
    }
    currentLayer.push(1);
    result.push(currentLayer);
  }
  return result;
};
