const checkAnswers = function (correct, answers) {
    for (let i = 0; i < 3; i++) {
        if (correct[i] !== answers[i]) {
            return "Fail"
        }
    }
    return "Pass"
};

let correct = [1, 0, 1], answers = [1, 1, 1]
console.log(checkAnswers(correct, answers))