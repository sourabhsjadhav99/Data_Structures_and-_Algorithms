
function countTriplets(nums) {
    nums.sort((a, b) => a - b); // Step 1: Sort the array
    let count = 0;

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left];
            if (sum === nums[right]) {
                count++;
                left++;
                right--;
            } else if (sum < nums[right]) {
                right--;
            } else {
                left++;
            }
        }
    }

    return count;
}


  let arr =[1, 5, 3, 2]
  console.log(countTriplets(arr))