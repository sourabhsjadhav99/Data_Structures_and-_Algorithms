function countValleys(steps, path) {
    let altitude = 0
    let valleyCount = 0
    for (let i = 0; i < path.length; i++) {
        if (path[i] === "U") {
            altitude++
        } else if (path[i] === "D") {
            altitude--
        }
        if (altitude === 0 && path[i] === 'U') {
            valleyCount++; // Walked through a valley
        }
    }
    return valleyCount
}
let steps = 8, path = "UDDDUDUU"
console.log(countValleys(steps, path))