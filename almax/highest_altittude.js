function largestAltitude(gain) {
    let currentAltitude = 0;
    let highestAltitude = 0;

    for (let i = 0; i < gain.length; i++) {
        currentAltitude += gain[i];
        if (currentAltitude > highestAltitude) {
            highestAltitude = currentAltitude;
        }
    }

    return highestAltitude;

}
let arr = [-5, 1, 5, 0, -7]
console.log(arr)