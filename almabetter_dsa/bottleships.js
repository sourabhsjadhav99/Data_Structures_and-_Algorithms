function countBattleships(board) {
    let count = 0;
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            // If the current cell is 'X' and it's not part of a previously counted battleship
            if (board[i][j] === 'X' && (i === 0 || board[i - 1][j] === '.') && (j === 0 || board[i][j - 1] === '.')) {
                count++;
            }
        }
    }
    
    return count;
}
let board = [["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]]
console.log(countBattleships(board))