// function findIndex(arr, str) {
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]===str){
//             return i+1
//         }
//     }
//     return -1
//  }
//  console.log(findIndex(["one", "two", "three", "four"], "four"))

function findIndex(arr, str) {
    let ind = arr.indexOf(str)
    if(ind===0){
      return -1
    }else{
      return ind
    }
  }
  console.log(findIndex(["AlmaBetter","Newton Class","Edureka","Unacademy"], "Edureka"))