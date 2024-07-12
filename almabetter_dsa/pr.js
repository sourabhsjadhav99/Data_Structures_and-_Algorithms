// let score = 70
// let grade 
// if(score> 70){
//     grade="distinction"

// }else if(score<=70 && score> 60){
//     grade ="first class"

// }else{
//     grade = "fail"
// }
// console.log(grade)

// let score = 70;
// let grade;

// switch (true) {
//   case score > 70:
//     grade = "distinction";
//     break;
//   case score <= 70 && score > 60:
//     grade = "first class";
//     break;
//   default:
//     grade = "fail";

// }

// console.log(grade); // Output: first class


// for(let i=0; i<10; i++){
//     console.log(`Hello-${i+1}`)

// }



// for(let i=0;i<arr.length ; i++){
//     if(i==5){
//         continue
//     }
//     console.log(i+"-"+arr[i])

// }
// let i=0
// while(i<arr.length){
//     i++
//     if(i==5){
//         continue
//     }
//     console.log(i + "-" + arr[i])

// }

// let arr=[{
//     name:"Sourabh",
//     gender:"male",
//     age:24
// },{
//     name:"sagar",
//     gender:"male",
//     age:24
// }, {
//     name:"Simbha",
//     gender:"male",
//     age:24
// }]
// let obj={
//     name:"Sourabh",
//     gender:"male",
//     age:24,
//     info:function(){
//        return ()=>this.name
//     }

// }
// let calling=obj.info()
// console.log(calling())
// let [sourabh, sagar, simbha]=arr
// console.log(simbha)

// Object.entries(obj).forEach(([key, value], ind)=>{
//     console.log(`${key} --> ${value} -->${ind}`)
// })

// let name ="Sourabh"
// function sayHello(name){
//     return "hello " + name

// }
// console.log(sayHello())

// let spiderman ={
//     name: "Peter",
//     power:"swing",
//     // intro:function(date){
//     //     return `My name is ${this.name} and my power is ${this.power} from ${date}`

//     // }

// }

// let ironman={
//     name:"tony",
//     power:"fly"
// }

// let ironman=[10,20]
// let [name, power]= ironman
// console.log(name, power)

// function intro(date){
//     return `My name is ${this.name} and my power is ${this.power} from ${date}`

// }
// console.log(spiderman.intro.call(ironman,["22 july 1990"]))
// console.log(spiderman.intro.apply(spiderman,["22 july 1990"]))
// let intro1 = spiderman.intro.bind(ironman)
// console.log(intro1("20 july 2021"))


// let arr =[50,66,89,2,4,10,87,3,0,1]
// let sorted = arr.sort((a,b)=>a-b)
// console.log(sorted)


// let regex =/\d/
// let str = 'abc12'
// console.log(regex.test(str))


// let enterName=(name)=>{
//     return name
// }

// let printName =(name)=>{
//     console.log(`Hii ${name} `)
// }
// printName(enterName("Sourabh"))



// arr.forEach((elm)=>  elm+1)
// console.log(arr)

// let findNum = arr.indexOf(0,6)
// console.log(findNum)
// console.log(...arr)
// let arr=[25,8789,10,36,7,0,2,5,60000,0.1]
// let max =Math.max(...arr)
// console.log(max)


// console.log(arr.reverse())

// let l=arr.length-1
// let s=0
// while(l>s){
//     // let temp =arr[s]
//     // arr[s]=arr[l]
//     // arr[l]=temp
//     [arr[s],arr[l]]=[arr[l], arr[s]]
//     l--
//     s++

// }
// console.log(arr)

// console.log([...new Set(arr.sort((a,b)=>a-b))][1])
// let max_1 =Infinity
// let max_2 = Infinity

// for(let i=0; i<arr.length; i++){
//     if(arr[i]<max_1){
//         max_2=max_1
//         max_1=arr[i]
//     }
//     if(arr[i]<max_2 && arr[i]>max_1){
//         max_2=arr[i]
//     }
// }
// console.log(max_1, max_2)

// function sortFunc(arr1, arr2){
//     return [...arr1, ...arr2].sort((a,b)=>a-b)

// }
// console.log(sortFunc([15,69,23,10],[2,897,36,15,0]))

// let arr1=[5,6,7,85,26], arr2=[1,2,3,4,5,6,7]
// let similar =[]
// for(i=0;i<arr1.length; i++){

//     for(j=0;j<i-1; j++){
//         if(arr2.includes(arr1[j])){
//             similar.push(arr1[j])

//         }

//     }

// }

// console.log(similar)

// let str='ABCDEFGHABEF'
// let str2 =""
// let map =new Map()

// for(let i=0; i<str.length; i++){
//     // if(!map.has(str[i])){
//     //     map.set(str[i], 1)
//     // }else{
//         map.set(str[i], (map.get(str[i])||0)+1)
//     // }
// }
// console.log(map)

// for( let [key, value] of map){
//     str2=str2+key
// }
// console.log(str2.length)

// let subStr=(str)=>{
//     let longest=""
//     for(let i=0; i<str.length; i++){
//         let sub=""
//         for(j=i; j<str.length;j++){
//             if(sub.includes(str[j])){
//                 break
//             }else{
//                 sub=sub+str[j]
//             }

//         }
//         if(sub.length>longest){
//             longest=sub

//         }
//     }
//     return longest.length

// }
// console.log(subStr(str))

// function longestSubstringWithoutRepeatingChars(str) {
//     let longest=''
//     let start=0;
//     let charMap = new Map();
//     for (let end =0; end < str.length; end++) {
//     if (charMap.has(str[end])) {
//     start = Math.max(start, charMap.get(str[end]) + 1);
//     }

//     charMap.set(str[end], end);
//     let substring= str.slice(start, end + 1);
//     if (substring.length > longest.length) {
//     longest= substring
//     }
//     }

//     return longest;
//     }
//     console.log(longestSubstringWithoutRepeatingChars("abcdbcbb"));



// let str='ABCDEFGHABEF'

// function abc (str){
//     for(let i=0; i<str.length; i++){
//         for(let j=0; j<str.length; j++){      
//             if(i!=j && str[i]===str[j]){
//                return str[i]         
//             }   
//         }  
//     }
// }
// console.log(abc(str))

// let map=new Map()

// for (let char of str){
//     if(!map.has(char)){
//         map.set(char, 1)

//     }else{
//         console.log(char)
//         break
//     }

// }


// let obj1={ "name": "John", "age": 30 }

// let obj2 ={ "isStudent": true, "age": 25 }

// console.log(Object.assign(obj1,obj2))

// let obj1= JSON.parse(JSON.stringify(obj))

// let set = new Set([1, 2, 3, 2, 4, 4, 5])
// console.log(set)


function addNumber(count) {
    console.log(count,cc)
    return  (cc)=>{
        console.log(cc)
        return [cc, count]
    }

}
let add= addNumber(5)
console.log(add(8))
// console.log(add())
// console.log(add())


// var createCounter = function (n) {

//     return () => n++

// };
// const counter = createCounter(10);
// console.log(counter());
// console.log(counter());
// console.log(counter());
