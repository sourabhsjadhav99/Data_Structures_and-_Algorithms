function findNumberOfTriangles(arr, n){
    let triangles = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] > arr[k] && arr[i] + arr[k] > arr[j] && arr[j] + arr[k] > arr[i]) {
                    triangles.push([arr[i], arr[j], arr[k]]);
                }
            }
        }
    }

    return triangles.length
}