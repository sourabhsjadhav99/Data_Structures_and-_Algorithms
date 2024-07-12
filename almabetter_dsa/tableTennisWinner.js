function determineWinner(statistics) {
    let arshPoints = 0;
    let opponentPoints = 0;
    let leadBy2 = false;

    for (let point of statistics) {
        if (point === '1') {
            arshPoints++;
        } else {
            opponentPoints++;
        }

        if (arshPoints >= 11 || opponentPoints >= 11) {
            if (Math.abs(arshPoints - opponentPoints) >= 2) {
                leadBy2 = true;
                break;
            }
        }
    }

    if (arshPoints > opponentPoints && leadBy2) {
        return 'WIN';
    } else {
        return 'LOSE';
    }
}

// Example usage:
const statistics1 = '11111111112222222222';
console.log(determineWinner(statistics1));  // Output: 'LOSE'

const statistics2 = '0101111111111';
console.log(determineWinner(statistics2));  // Output: 'WIN'
