function isIsomorphic(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const mapST = new Map();
    const mapTS = new Map();

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        // Check the s -> t mapping
        if (mapST.has(charS)) {
            if (mapST.get(charS) !== charT) {
                return false;
            }
        } else {
            mapST.set(charS, charT);
        }

        // Check the t -> s mapping
        if (mapTS.has(charT)) {
            if (mapTS.get(charT) !== charS) {
                return false;
            }
        } else {
            mapTS.set(charT, charS);
        }
    }

    return true;
}

// Example 1
const s1 = "egg";
const t1 = "add";
console.log(isIsomorphic(s1, t1)); // Output: true

// Example 2
const s2 = "foo";
const t2 = "bar";
console.log(isIsomorphic(s2, t2)); // Output: false

// Example 3
const s3 = "paper";
const t3 = "title";
console.log(isIsomorphic(s3, t3)); // Output: true
