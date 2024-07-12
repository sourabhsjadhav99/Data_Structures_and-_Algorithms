const grayCode = function(n){
    if (n === 0) {
        return [0];
    }

    let result = [0, 1];
    for (let i = 1; i < n; i++) {
        const mask = 1 << i;
        for (let j = result.length - 1; j >= 0; j--) {
            result.push(result[j] | mask);
        }
    }

    return result;

};