var countSegments = function(s) {
    let count = 0;
    let inSegment = false;

    for (const char of s) {
        if (char !== ' ' && !inSegment) {
            inSegment = true; // Start of a new segment
            count++;
        } else if (char === ' ') {
            inSegment = false; // End of the current segment
        }
    }

    return count;
};