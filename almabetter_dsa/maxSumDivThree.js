function maxSumDivThree(nums) {
    // Initialize an array to keep track of the maximum sum divisible by three for each remainder (0, 1, 2) after dividing by three
    const dp = [0, -Infinity, -Infinity];

    for (const num of nums) {
        const temp = [...dp]; // Create a temporary copy of dp

        for (let i = 0; i < 3; i++) {
            const remainder = (temp[i] + num) % 3;
            dp[remainder] = Math.max(dp[remainder], temp[i] + num);
        }
    }

    return dp[0]; // Return the maximum sum divisible by three with remainder 0
}

// Example usage:
const nums1 = [3, 6, 5, 1, 8];
console.log(maxSumDivThree(nums1)); // Output: 18

const nums2 = [4];
console.log(maxSumDivThree(nums2)); // Output: 0
