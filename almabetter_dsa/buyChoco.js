var buyChoco = function (prices, money) {
    let sum = null
    for (let i = 0; i < prices.length; i++) {

        for (let j = 0; j < prices.length; j++) {
            if (i !== j) {
                if (prices[i] + prices[j] <= money) {
                    sum = prices[i] + prices[j]
                }
            }
        }
    }
    if (money - sum >= 0) {
        return money - sum
    } else {
        return money
    }
};

// var buyChoco = function(prices, money) {
//     const sortPrices = prices.sort((a,b)=>a-b)
//     const ans = money-sortPrices[0]-sortPrices[1]
//     return ans >= 0 ? ans : money  
// };
let prices = [3,2,3], money = 3
console.log(buyChoco(prices, money))