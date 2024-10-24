// var exist = function(board, word) {
//     const m = board.length;
//     const n = board[0].length;
    
//     const backtrack = (i, j, k) => {
//         if (k === word.length) {
//             return 1;
//         }
//         if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word.charAt(k)) {
//             return 0;
//         }
        
//         const temp = board[i][j];
//         board[i][j] = '\0'; 
        
//         const result = backtrack(i + 1, j, k + 1) || 
//                        backtrack(i - 1, j, k + 1) || 
//                        backtrack(i, j + 1, k + 1) || 
//                        backtrack(i, j - 1, k + 1);
        
//         board[i][j] = temp; 
//         return result;
//     };
    
//     for (let i = 0; i < m; ++i) {
//         for (let j = 0; j < n; ++j) {
//             if (backtrack(i, j, 0)) {
//                 return 1;
//             }
//         }
//     }
//     return 0;
// };


// let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"

// console.log(exist(board, word)); // 1)

// Read input from stdin
process.stdin.on('data', function(chunk) {
    var lines = chunk.toString().split('\n');
    
    // Read the matrix dimensions
    var dimensions = lines[0].trim().split(' ');
    var m = parseInt(dimensions[0]); // number of rows
    var n = parseInt(dimensions[1]); // number of columns

    // Read the board (matrix)
    var board = [];
    for (let i = 1; i <= m; i++) {
        board.push(lines[i].trim().split(''));
    }

    // Read the word to search
    var word = lines[m + 1].trim();

    // Call the exist function and print the result
    console.log(exist(board, word));
});

// Function to check if the word exists in the board
var exist = function(board, word) {
    const m = board.length;
    const n = board[0].length;
    
    const backtrack = (i, j, k) => {
        if (k === word.length) {
            return 1;
        }
        if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word.charAt(k)) {
            return 0;
        }
        
        const temp = board[i][j];
        board[i][j] = '\0';  // Mark the cell as visited
        
        const result = backtrack(i + 1, j, k + 1) || 
                       backtrack(i - 1, j, k + 1) || 
                       backtrack(i, j + 1, k + 1) || 
                       backtrack(i, j - 1, k + 1);
        
        board[i][j] = temp;  // Restore the original character
        return result;
    };
    
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (backtrack(i, j, 0)) {
                return 1; // Word found
            }
        }
    }
    return 0; // Word not found
};

// Example usage and testing
// Uncomment the following lines for local testing
// let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED";
// console.log(exist(board, word)); // Expected output: 1
