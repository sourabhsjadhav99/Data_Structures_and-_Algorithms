function utopianTree(n) {
    let height = 1;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 1) {
            // Spring: Double the height
            height *= 2;
        } else {
            // Summer: Increase height by 1
            height += 1;
        }
    }
    return height;
}
const cycles = 5;
console.log(utopianTreeHeight(cycles));