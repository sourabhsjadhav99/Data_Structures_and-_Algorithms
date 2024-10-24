def exist(board, word):
    m = len(board)
    n = len(board[0])
    
    def backtrack(i, j, k):
        # If we have matched all characters of the word
        if k == len(word):
            return True
        
        # Check boundaries and whether the current cell matches the character in the word
        if i < 0 or i >= m or j < 0 or j >= n or board[i][j] != word[k]:
            return False
        
        # Temporarily mark the cell as visited
        temp = board[i][j]
        board[i][j] = '\0'  # Marking the cell as visited
        
        # Explore in all four directions
        result = (backtrack(i + 1, j, k + 1) or 
                  backtrack(i - 1, j, k + 1) or 
                  backtrack(i, j + 1, k + 1) or 
                  backtrack(i, j - 1, k + 1))
        
        # Restore the cell back to its original value
        board[i][j] = temp  
        return result

    for i in range(m):
        for j in range(n):
            if backtrack(i, j, 0):
                return 1  # Found the word

    return 0  # Word not found

# Example usage
board = [["A", "B", "C", "E"],
         ["S", "F", "C", "S"],
         ["A", "D", "E", "E"]]
word = "ABCCED"

print(exist(board, word))  # Output: 1
