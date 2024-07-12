class Node{
    constructor(data, next){
        this.data=data
        this.next=next
    }
}
class Palindrome{
    constructor(){
        this.head=null
    }

    add(data){
        let newNode=new Node(data)

        if(!this.head){
            this.head=newNode

        }else{
            let current = this.head
            while(current.next){
                current=current.next
            }
            current.next=newNode
        }
       
    }

    isPal(){
        if(!this.head){
            return "False"
        }
        let values=[]
        let current=this.head
        while(current){
            values.push(current.data)
            current=current.next
        }

        let start =0
        let end=values.length-1

        while(start<end){
            if(values[start] !==values[end]){
                return "False"
            }
            start++
            end--
        }
        return "True"
    }
}
let list =new Palindrome()
list.add(1)
list.add(1)
list.add(1)
list.add(1)
list.add(2)
console.log(list.isPal())
