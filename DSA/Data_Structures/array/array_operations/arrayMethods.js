// Splice ==>

// Insert 
// let data = [60, 30, 10, 67, 40];
// data.splice(2, 0, 70)
// console.log(data)

// let newEl = 70;
// let position = 2;
// for (let i = data.length - 1; i >= 0; i--) {
//     if (i >= position) {
//         data[i + 1] = data[i];
//         if (i == position) {
//             data[i] = newEl;
//         }
//     }
// }
// console.log(data)


//-----------------------
// Delete 
let data = [60, 30, 10, 67, 40];
data.splice(3,1)
console.log(data)

// let position = 3;
// for (let i = position; i < data.length - 1; i++) {

//     data[i] = data[i + 1];
// }
// data.length = data.length - 1;
// console.log(data)
// ----------------------------------------------------------------------------------------------------------------------
// Merge 
// let data =[3,7,12,34,56,90];
// let data2=[20,30,40,50]
// console.log([...data,...data2])
//-----------------------
// console.log(data.concat(data2))
//-----------------------
// let data3=[];
// for(i=0;i<data.length;i++){
//   data3[i]=data[i];
// }
// for(i=0;i<data2.length;i++){
//   data3[data.length+i]=data2[i];
// }
// console.data(data3);
// ----------------------------------------------------------------------------------------------------------------------
// Reverse 
// let arr=[2,45,62,79,10,23,1,5]
// console.log(arr.reverse())
//-------------------------
// let start =0
// let end = arr.length-1

// while(start<=end){
//     let temp=arr[start]
//     arr[start]=arr[end]
//     arr[end]=temp
//     start++
//     end--
// }
// console.log(arr)