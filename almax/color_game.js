function winnerOfGame(colors) {
    let aliceMoves = 0;
    let bobMoves = 0;
    
    // Traverse through the string to count valid moves for Alice and Bob
    for (let i = 1; i < colors.length - 1; i++) {
        if (colors[i - 1] === colors[i] && colors[i] === colors[i + 1]) {
            if (colors[i] === 'A') {
                aliceMoves += 1;
            } else if (colors[i] === 'B') {
                bobMoves += 1;
            }
        }
    }
    
    // Alice wins if she has more moves than Bob
    return aliceMoves > bobMoves;
}

// Example cases
console.log(winnerOfGame("AAABABB")); // Output: true
console.log(winnerOfGame("AA")); // Output: false
