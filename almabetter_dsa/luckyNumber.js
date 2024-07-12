function luckyNumbers(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const rowMins = new Array(m).fill(Number.MAX_VALUE);
    const colMaxs = new Array(n).fill(Number.MIN_VALUE);
    console.log(rowMins, colMaxs)

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            rowMins[i] = Math.min(rowMins[i], matrix[i][j]);
            colMaxs[j] = Math.max(colMaxs[j], matrix[i][j]);
        }
    }

    const luckyNumbers = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === rowMins[i] && matrix[i][j] === colMaxs[j]) {
                luckyNumbers.push(matrix[i][j]);
            }
        }
    }

    return luckyNumbers;
}

const matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]];

console.log(luckyNumbers(matrix)); // Output: [15, 16, 17]
