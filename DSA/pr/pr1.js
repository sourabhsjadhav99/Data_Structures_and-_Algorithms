// let arr =[1,2,3,4,5,6]

// function sum (arr, index=arr.length-1){
// if(index===0){
//     return arr[index]
// }
// return arr[index]+sum(arr, index-1)
// }

// console.log(sum(arr))

// console.log(arr.reduce((sum,elm)=>sum+elm))

// function sum (arr){
// if(arr.length===0){
//     return 0
// }
// return arr[0]+sum(arr.slice(1))
// }

// console.log(sum(arr))


// let arr=[2,6,1,3,5]
// function squreArray(arr){
//     for(let i=0; i<arr.length; i++){
//         arr[i]=arr[i]*arr[i]
//     }
//     return arr.sort((a,b)=>a-b)

// }
// console.log(squreArray(arr))

// let arr= ['d','a','b','b','c','a','b','c','c','c']

// let map = new Map()
// for (let i=0; i<arr.length; i++){
//     map.set(arr[i], (map.get(arr[i])||0)+1)
// }

// let arr2=[]

// for(let [key, value] of map){
//     if(value<=arr2[arr2.length-1]){
//         arr2[arr2.length-1]=key

//     }else{
//         arr2.push(key)
//     }

// }
// console.log(arr2)

// let sortedArr= Array.from(map.entries()).sort((a,b)=>b[1]-a[1])

// let sortedMap = new Map(sortedArr);

// let resulting_array=[]
// for(let [key, value] of sortedMap){
// resulting_array.push(key)
// }
// console.log(resulting_array)

// let num= "2582".split("").map(Number)

// for(let i=0;i<num.length; i++){
//     if(i%2===0 ){
//         if(arr[i]%2===0){

//         }
//     }else{

//     }

// }

// let str = new String("abc")
// str = str+"aa"
// console.log(str)

// let arr = [1, 2, 3, 4, 5, 6, 7]

// function printNum(arguments) {
//     let sum=null
//     for (let i = 0; i < arguments.length; i++) {
//         sum = sum + arguments[i]
//     }
//     return sum
// }
// console.log(printNum(arr))

// console.log(Boolean(0))

// let arr = ['a', 'b', 'c'];

// let arr ={
//     name:"sourabh",
//     age:24
// }
// let iterator = Object.entries(arr)
// console.log(iterator)
// for (let i of iterator){
//     console.log(i)
// }


// let arr =[1,2,3,4,5,6,1,2,2,2,3,1,4]

// // let map= new Set([...arr])
// // console.log(map)

// let fillIt = arr.fill(10)
// console.log(fillIt)

// console.log(parseInt("123Hello"))
// let a=10
// console.log(a++ - ++a)

// console.log(typeof 9)


// const obj = {
//     a: 1,
//     b: 2
// };
// let arr=[]
// arr=obj

// console.log(arr[0]=obj)

// function add(a, b) {
//     return a + b;
// }

// console.log(add(2, 3)); // Output: 5

// // Redefining the add function
// function add(a, b, c) {
//     return a + b + c;
// }

// console.log(add(2, 3, 4)); // Output: 9

// const readFileAsync = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let msg="hello"
//             if (msg) {
//                 resolve(msg)
//             } else {
//                 reject("No msg")
//             }
//         }, 5000)
//     });
// };

//   readFileAsync()
//     .then((result) => {
//       console.log("File ready: " + result);
//     })
//     .catch((error) => {
//       console.log("Error reading file: " + error);
//     })

// async function message() {
//     try {
//         let msg = await readFileAsync()
//         console.log(msg)
//     } catch (err) {
//         console.log(err)
//     }
// }
// message()



// const myPromise = new Promise((resolve, reject) => {
//     // Asynchronous operation
//     setTimeout(() => {
//       resolve("Operation successful");
//     }, 2000);
//   });
//   console.log(myPromise)
// myPromise.then((data)=>console.log(data)).then(()=>console.log(myPromise))

const arr = [69, 92, 45, 7, 28];
arr.forEach((elm, index)=>arr[index]=elm+5)
console.log(arr)