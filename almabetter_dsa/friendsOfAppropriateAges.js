

function numFriendRequests(ages) {
    let requests = 0;
    for (let i = 0; i < ages.length; i++) {
        for (let j = 0; j < ages.length; j++) {
            if (i !== j && !(ages[j] <= 0.5 * ages[i] + 7) && !(ages[j] > ages[i]) && !(ages[j] > 100 && ages[i] < 100)) {
                requests++;
            }
        }
    }
    return requests;
}

// Example usage:
console.log(numFriendRequests([16, 16]));       // Output: 2
console.log(numFriendRequests([16, 17, 18]));   // Output: 2
