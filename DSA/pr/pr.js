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


class Node {
    constructor(value) {
        this.value = value
        this.next = null

    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0

    }
    // 1
    size() {
        return this.size
    }
    // 2
    isEmpty() {
        return this.size === 0
    }
    // 3
    prepend(value) {
        let node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    // 4
    append(value) {
        let node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let curr = this.head
            while (curr.next) {
                curr = curr.next
            }
            curr.next = node
        }
        this.size++
    }
    // 5
    insert(value, index) {
        if (index < 0 || index > this.size) {
            return "Invalid Index"
        }
        if (index === 0) {
            this.prepend(value)
        } else {
            let node = new Node(value)
            let curr = this.head
            for (let i = 0; i < index - 1; i++) {
                curr = curr.next
            }
            node.next = curr.next
            curr.next = node
        }
        this.size++
    }

    // 6
    removeIndex(index) {
        if (index < 0 || index > this.size) {
            return "Invalid Index"
        }

        let nodeToRemove
        if (index === 0) {
            nodeToRemove = this.head
            this.head = nodeToRemove.next
        } else {
            let curr = this.head
            for (let i = 0; i < index - 1; i++) {
                curr = curr.next
            }

            nodeToRemove = curr.next
            curr.next = nodeToRemove.next
        }

        this.size--
    }
    // 7
    search(value) {
        let i = 0, curr = this.head
        while (curr) {
            if (curr.value === value) {
                return i
            }
            i++
            curr = curr.next
        }
        return -1
    }
// 8
    reverse(){
        let prev= null
        let curr = this.head
        while(curr){
            let next = curr.next 
            curr.next = prev
            prev =curr
            curr=next
        }
        this.head = prev
    }


}