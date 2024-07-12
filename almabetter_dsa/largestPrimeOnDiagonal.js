var diagonalPrime = function (nums) {

    function isPrime(number) {
        if (number < 2) {
            return false
        }
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false
            }
        }
        return true
    }

    let prime = []
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = 0; j < nums.length; j++) {
    //         if (i === j || i + j === nums.length-1) {
    //             if(isPrime(nums[i][j])){
    //                 prime.push(nums[i][j])
    //             }
    //         }

    //     }
    // }

    for (let i = 0; i < nums.length; i++) {
        if(isPrime(nums[i][i])){
            prime.push(nums[i][i])
        }
        if(isPrime(nums[i][nums.length-1-i])){
            prime.push(nums[i][nums.length-1-i])
        }
    
    }
    return Math.max(...prime)
};

console.log(diagonalPrime([[1,2,3],[5,6,7],[9,10,11]]))