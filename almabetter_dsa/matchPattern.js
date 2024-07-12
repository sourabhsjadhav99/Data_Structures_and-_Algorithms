function matchPattern(pattern, input) {
  const inputArr = input.split("");
  console.log(inputArr)
  if (pattern.length !== inputArr.length) {
    return false;
  }

  const map = new Map();
  const used = new Set();

  for (let i = 0; i < pattern.length; i++) {
    const p = pattern[i];
    const c = inputArr[i];

    if (!map.has(p)) {
      if (used.has(c)) {
        return false; // Character already mapped to another pattern character
      }
      map.set(p, c);
      used.add(c);
    } else {
      if (map.get(p) !== c) {
        return false; // Conflict in mapping
      }
    }
  }

  return true;
}

console.log(matchPattern("abba", "xyyx")); 