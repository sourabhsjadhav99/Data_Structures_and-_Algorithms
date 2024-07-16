// let arr = [9, 23, 8, 73, 56, 24,10];
// numToInsert = 25
// let position = 3

// function insertInArray(arr, position, numToInsert) {
//     for (let i =arr.length; i > position; i--) {
//             arr[i] = arr[i-1]
//     }
//     arr[position] = numToInsert
//     return arr
// }
// console.log(insertInArray(arr, position, numToInsert))
// arr.splice(3,2,25)
// console.log(arr)

// function deleteFromArray(arr, position) {
//     for (let i = position; i < arr.length-1; i++) {
//         arr[i] = arr[i + 1]
//     }
//     arr.length = arr.length - 1
//     return arr
// }
// console.log(deleteFromArray(arr, position))

// let start =0
// let end = arr.length-1

// while(start<end){
//     let temp=arr[start]
//     arr[start]=arr[end]
//     arr[end]=temp
//     start++
//     end--
// }
// console.log(arr)


// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null

//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null
//         this.size = 0

//     }
//     // 1
//     size() {
//         return this.size
//     }
//     // 2
//     isEmpty() {
//         return this.size === 0
//     }
//     // 3
//     prepend(value) {
//         let node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }
//     // 4
//     append(value) {
//         let node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             let curr = this.head
//             while (curr.next) {
//                 curr = curr.next
//             }
//             curr.next = node
//         }
//         this.size++
//     }
//     // 5
//     insert(value, index) {
//         if (index < 0 || index > this.size) {
//             return "Invalid Index"
//         }
//         if (index === 0) {
//             this.prepend(value)
//         } else {
//             let node = new Node(value)
//             let curr = this.head
//             for (let i = 0; i < index - 1; i++) {
//                 curr = curr.next
//             }
//             node.next = curr.next
//             curr.next = node
//         }
//         this.size++
//     }

//     // 6
//     removeIndex(index) {
//         if (index < 0 || index > this.size) {
//             return "Invalid Index"
//         }

//         let nodeToRemove
//         if (index === 0) {
//             nodeToRemove = this.head
//             this.head = nodeToRemove.next
//         } else {
//             let curr = this.head
//             for (let i = 0; i < index - 1; i++) {
//                 curr = curr.next
//             }

//             nodeToRemove = curr.next
//             curr.next = nodeToRemove.next
//         }

//         this.size--
//     }
//     // 7
//     search(value) {
//         let i = 0, curr = this.head
//         while (curr) {
//             if (curr.value === value) {
//                 return i
//             }
//             i++
//             curr = curr.next
//         }
//         return -1
//     }
// // 8
//     reverse(){
//         let prev= null
//         let curr = this.head
//         while(curr){
//             let next = curr.next 
//             curr.next = prev
//             prev =curr
//             curr=next
//         }
//         this.head = prev
//     }


// }

// let n = 5
// let str = ""

// for (let i = 0; i <= n; i++) {
//     for (let k = 0; k < i; k++) {
//         str += " "
//     }
//     for (let j = 0; j <2*(n-i)-1; j++) {
//         str += "*"
//     }
//     str += "\n"
// }
// console.log(str)



// let n=5
// let str =""
// for(let i=1; i<=n; i++){
//     for(let i=n; i>=1; i++){
//         str += i 

//     }
//     str += "\n"
// }
// console.log(str)


// let n = 5
// let pattern = "";
// let variable = 1 
// for (let i = 1; i <= n; i++) {
//     for (let j = 0; j <= (n- i) - 1; j++) {
//         pattern += " "
//     }
//     for (let j = 1; j <= 2 * i - 1; j++) {
//         pattern += variable 

//         variable++
//         // pattern += j
//     }
//     pattern += "\n";
// }
// console.log(pattern)

// function isValid(str) {
//     let obj = { "(": ")", "[": "]", "{": "}" }
//     let stack = []
//     for (let char of str) {
//         if (obj[char]) {
//             stack.push(obj[char])
//         } else if (stack.length > 0 && stack[stack.length - 1] === char) {
//             stack.pop()
//         } else {
//             return false
//         }
//     }
//     return stack.length === 0
// }


// console.log(isValid("({{{}}})"))

function twoSum (nums, target){
    for (let i=0; i<nums.length; i++){
        if(nums.includes(target-nums[i])){
            return [i, nums.indexOf(target-nums[i])]
        }
    }
    return []
}
let nums=[2,7,4,11,15], target = 15
console.log(twoSum(nums, target))