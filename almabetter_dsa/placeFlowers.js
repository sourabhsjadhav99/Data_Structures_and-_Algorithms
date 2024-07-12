const canPlaceFlowers = function (flowerbed, n) {

    for (let i = 1; i < flowerbed.length; i++) {
        if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
            n = n - 1
        }

    }
    return n === 0 ? true : false
};
let flowerbed = [1, 0, 0, 0, 1], n = 2
console.log(canPlaceFlowers(flowerbed, n))
