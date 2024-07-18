function compress(chars) {
    if (chars.length === 1) {
        return 1;
    }
    
    let write_idx = 0;
    let count = 1;
    
    for (let read_idx = 1; read_idx <= chars.length; read_idx++) {
        if (read_idx < chars.length && chars[read_idx] === chars[read_idx - 1]) {
            count++;
        } else {
            chars[write_idx] = chars[read_idx - 1];
            write_idx++;
            if (count > 1) {
                const countStr = count.toString();
                for (let i = 0; i < countStr.length; i++) {
                    chars[write_idx] = countStr[i];
                    write_idx++;
                }
            }
            count = 1;
        }
    }
    
    return write_idx;
}

// Example cases:
let chars1 = ["a","a","b","b","c","c","c"];
console.log(compress(chars1)); // Output: 6, chars1 becomes ["a","2","b","2","c","3"]

let chars2 = ["a"];
console.log(compress(chars2)); // Output: 1, chars2 remains ["a"]

let chars3 = ["a","b","b","b","b","b","b","b","b","b","b","b","b"];
console.log(compress(chars3)); // Output: 4, chars3 becomes ["a","b","1","2"]
