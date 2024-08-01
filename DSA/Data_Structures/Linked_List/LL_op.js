class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // 1
    isEmpty() {
        return this.size === 0;
    }
    // 2
    getSize() {
        return this.size;
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
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = node;
        }
        this.size++;
    }
    // 5
    insert(value, index) {
        if (index < 0 || index > this.size) {
            return "Invalid Index";
        }
        if (index === 0) {
            this.prepend(value);
            this.size++;
        } else {
            const node = new Node(value);
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) { // index-1 because initially prev = this.head AND INDEX 
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
           
        }
    }

 
    // 6
    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }
        let nodeToRemove;
        if (index === 0) {
            nodeToRemove = this.head;
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            nodeToRemove = prev.next;
            prev.next = nodeToRemove.next;
        }
        this.size--;
        return nodeToRemove.value;
    }
    // 7
    removeValue(value) {
        if (this.isEmpty()) {
            return null;
        }
        let nodeToRemove;
        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return value;
        } else {
            let prev = this.head;
            while (prev.next && prev.next.value !== value) {
                prev = prev.next;
            }
            if (prev.next) {
                nodeToRemove = prev.next;
                prev.next = nodeToRemove.next;
                this.size--;
                return value;
            }else{
                return null;
            }
            
        }
    }
    // 8
    search(value) {
        if (this.isEmpty()) {
            return -1;
        }
        let i = 0;
        let curr = this.head;
        while (curr) {
            if (curr.value === value) {
                return i;
            }
            curr = curr.next;
            i++;
        }
        return -1;
    }
    // 9
    reverse() {
        let prev = null;
        let curr = this.head;
        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }

    // 10
    print() {
        if (this.isEmpty()) {
            console.log("List is empty");
        } else {
            let curr = this.head;
            let list = "";
            while (curr) {
                list += `${curr.value} `;
                curr = curr.next;
            }
            console.log(list);
        }
    }

    // 11
    // palindrome or not 
    isPalindrome(){
        if(this.isEmpty()){
            return "False"
        }
        let values=[]
        let curr=this.head
        while(curr){
            values.push(curr.value)
            curr=curr.next
        }

        let start =0
        let end=values.length-1

        while(start<end){
            if(values[start] !==values[end]){
                return false
            }
            start++
            end--
        }
        return true
    }
}

const l = new LinkedList();

console.log(l.isEmpty());

console.log(l.getSize());


l.append(50);
l.prepend(20);
l.append(80);
l.insert(60, 2);
// l.print();

// l.removeFrom(4);

// l.print();

// l.reverse();
l.print();

// console.log(l.search(60));


// l.removeValue(80);
// l.print();



l.append(60);
l.append(50);
l.append(20);
l.print()
console.log(l.isPalindrome())