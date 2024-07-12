function findSubarrayWithSum(N, S, A) {
    for (let i = 0; i < N; i++) {
        let sum = 0
        for (let j = i; j < N; j++) {
                sum = sum + A[j]
                if (sum === S) {
                    return [i+1, j+1]
                    
                }
        }
    }
return [-1]
}
let N = 5, S = 12, A = [1,2,3,7,5]
console.log(findSubarrayWithSum(N, S, A))