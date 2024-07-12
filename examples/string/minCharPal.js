// function minCharsToMakePalindrome(s) {
//     let left = 0;
//     let right = s.length - 1;
//     let count = 0;

//     while (left < right) {
//       if (s[left] !== s[right]) {
//         count++;
//         if (s[left + 1] === s[right]) {
//           left++;
//         } else if (s[left] === s[right - 1]) {
//           right--;
//         }
//       }
//       left++;
//       right--;
//     }

//     return count;
//   }

//   let s = "aabbccddee";
//   let count = minCharsToMakePalindrome(s);

//   console.log(count);

function minOpsToMakePalindrome(str) {

    function minOpsHelper(str, i, j) {
        
        // base case: substring is a single character (already a palindrome)
        if (i == j) {
            return 0;
        }

        // base case: substring has two characters
        if (j - i == 1) {
            return str[i] == str[j] ? 0 : 1;
        }

        // recursive case: substring has more than two characters
        if (str[i] == str[j]) {
            return minOpsHelper(str, i + 1, j - 1);
        } else {
            return Math.min(minOpsHelper(str, i + 1, j), minOpsHelper(str, i, j - 1)) + 1;
        }
    }

    return minOpsHelper(str, 0, str.length - 1);
}



let s = "sourabh";
let ops = minOpsToMakePalindrome(s);

console.log(ops);
  // Output: 2
