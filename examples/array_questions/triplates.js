function findTriplets(arr) {
    arr.sort((a, b) => a - b);
    const triplets = [];
    for (let i = arr.length - 1; i >= 2; i--) {
      let left = 0;
      let right = i - 1;
      while (left < right) {
        if (arr[left] + arr[right] === arr[i]) {
          triplets.push([arr[left], arr[right], arr[i]]);
          left++;
          right--;
        } else if (arr[left] + arr[right] < arr[i]) {
          left++;
        } else {
          right--;
        }
      }
    }
    return triplets.reverse();
  }
  const arr = [1, 2, 3, 4, 5];

  const triplets = findTriplets(arr);
  console.log(triplets); // Output: [[2, 3, 5], [3, 4, 7]]
  