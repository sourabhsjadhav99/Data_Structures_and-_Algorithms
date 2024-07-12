function longestSubstring(s) {
  let maxLength = 0;
  let start = 0;
  let charMap = new Map();
  let longestSubstr = "";

  for (let i = 0; i < s.length; i++) {
    if (charMap.has(s[i]) && charMap.get(s[i]) >= start) {
      start = charMap.get(s[i]) + 1;
    }
    charMap.set(s[i], i);
    let currentLength = i - start + 1;
    if (currentLength > maxLength) {
      maxLength = currentLength;
      longestSubstr = s.substring(start, i + 1);
    }
  }
  return longestSubstr;
}

let s = "abcdabcbdb";
let longest = longestSubstring(s);

console.log(longest);