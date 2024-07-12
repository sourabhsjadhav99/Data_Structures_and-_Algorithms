
var maximumWealth = function (accounts) {
    let maxSum = 0
    for (let i = 0; i < accounts.length; i++) {
        let sum = accounts[i].reduce((accumulator, sum) => {
            return accumulator + sum
        }, 0)
        maxSum = Math.max(sum, maxSum)
    }
    return maxSum
};
let accounts = [[1,5],[7,3],[3,5]]
console.log(maximumWealth(accounts))