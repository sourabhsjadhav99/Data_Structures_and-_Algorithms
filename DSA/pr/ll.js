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
    isEmpty() {
        return this.size === 0
    }
    // 2
    llSize() {
        return this.size
    }
    // 3
    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
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
    insert(index, value) {
        if (index < 0 || index > this.size) {
            return "Invalid index"
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
    // 7
    search(value) {

        if (this.isEmpty()) {
            return "no value"
        } else {
            let curr = this.head
            let index = 0

            while (curr) {
                if (curr.value === value) {
                    return index
                }
                curr = curr.next
                index = index + 1
            }

        }



    }
    // 8
    reverse() {
        let prev = null
        let curr = this.head

        while (curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next

        }
        this.head = prev
    }

    // 9
    deleteIndex(index) {
        if (index < 0 || index > this.size) {
            return "invalid index"
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
    }

    // 10 
    deleteValue(value) {
        if (this.isEmpty()) {
            return "empty"
        }
        let nodeToRemove
        if (this.head.value === value) {
            nodeToRemove = this.head
            this.head = nodeToRemove.next

        } else {
            let curr = this.head
            while (curr.next && curr.next.value !== value) {
                curr = curr.next
            }
            if (curr.next) {
                nodeToRemove = curr.next
                curr.next = nodeToRemove.next
            }




        }
    }
    // 6
    printLL() {
        let curr = this.head;
        let str = "";

        while (curr) {
            str = str + curr.value + " ";
            curr = curr.next;
        }

        return str;
    }
// 11
    isPalindrome(){
        let curr = this.head
        let arr =[]

        while(curr){
            arr.push(curr.value)
            curr=curr.next

        }
        let start =0
         let end= arr.length-1
        while(start<end){
            if(arr[start]!==arr[end]){
                return "not palindrome"

            }
            start++
            end--
        }
        return "Palindrome"
    }




}

let L1 = new LinkedList()

console.log(L1.isEmpty())
console.log(L1.llSize())
L1.prepend(2)
L1.prepend(3)
L1.append(5)
L1.insert(2, 8)
console.log(L1.llSize())
console.log(L1.printLL())
console.log(L1.search(3))
// L1.reverse()

L1.deleteIndex(0)
L1.deleteValue(8)
L1.append(2)
console.log(L1.printLL())
console.log(L1.isPalindrome())