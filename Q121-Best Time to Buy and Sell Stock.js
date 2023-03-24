var maxProfit = function (prices) {
  let buy = 0;
  let sell = 1;
  let profit = 0;
  while (sell < prices.length) {
    if (prices[buy] < prices[sell]) {
      let currentProfit = prices[sell] - prices[buy];

      profit = Math.max(currentProfit, profit);
    } else {
      buy = sell;
    }
    sell++;
  }
  return profit;
};
