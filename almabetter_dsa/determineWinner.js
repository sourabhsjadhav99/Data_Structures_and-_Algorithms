function determineWinner(X, Y) {

    if (X % 2 === 0 && Y % 2 === 0) {
        return "Ansh"
    } else if (X % 2 !== 0 && Y % 2 !== 0) {
        return "Ansh"
    }else{
        return "Jay"
    }

}

console.log(determineWinner(4, 3))