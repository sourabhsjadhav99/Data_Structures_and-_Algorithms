
function rearrange(arr) {
    let temp = [];
    let small = 0, large = arr.length- 1;
    let flag = true;
    for (let i = 0; i < arr.length; i++) {
        if (flag) {
            temp[i] = arr[large];
            large--
        } else {
            temp[i] = arr[small];
            small++
        }
        flag = !flag;
    }
    return temp
}

let arr = [1, 2, 20,3, 4, 5, 6];
console.log(rearrange(arr))

