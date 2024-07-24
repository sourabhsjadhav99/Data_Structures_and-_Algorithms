// function fetchData(callback) {
//     setTimeout(() => {
//         let data = "Sample Data"; 
//         callback(data);
//     }, 2000);
// }

// function callbackFunction(data) {
//     if (data) {
//         console.log(data);
//     } else {
//         console.log("Error");
//     }
// }

// fetchData(callbackFunction);

//------------------------------------------------------------------------------
// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let data = "";
//             if (data) {
//                 resolve(data);
//             } else {
//                 reject("Error");
//             }
//         }, 2000)
//     })
// }


// fetchData().then(data => {
//     console.log(data)
// }).catch(error => {
//     console.log(error)
// })
//  ----------------------------------------------------------------
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let data = "some data";
            if (data) {
                resolve(data);
            } else {
                reject("Error");
            }
        }, 2000)
    })
}

async function getData() {
    try {
        let data = await fetchData()
        console.log(data)

    }catch (e) {
        console.log(e)
    }

}
getData()