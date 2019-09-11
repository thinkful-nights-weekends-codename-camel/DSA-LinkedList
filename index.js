class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    insertFirst(data){
        this.head = new Node(data, this.head);
        this.size++ ;
    }

    insertLast(data){
        let node = new Node(data);
        let current;

        if(!this.head){
            this.insertFirst(data);
        }
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }

            current.next = node;
            this.size++;
        }
    }

    insertAt(data, index){                          //find
        if (index > 0 && index > this.size) return;
        if (index === 0){
            this.insertFirst(data);
            return;
        }
        
        const node = new Node(data);
        let current, previous;
        current = this.head;
        let count = 0;

        while(count < index){
            previous = current;
            current = current.next;
            count++;
        }

        previous.next = node;
        node.next = current;
        this.size++;

    }

    remove(index){
        if (index > 0 && index > this.size) 
        
        return 
        let current = this.head;
        let previous;
        let count = 0;

        if(index === 0){
            this.head = current.next;
        } else {

            while (count < index){
                count++;
                previous = current;
                current = current.next;
            }

            previous.next = current.next;
            this.size--;
        }
    }

    printListData(){
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    
}

function Main(){
    const SLL = new LinkedList();
    
    SLL.insertFirst("Apollo");
    SLL.insertFirst("Boomer");
    SLL.insertFirst("Helo");
    SLL.insertFirst("Husker");
    SLL.insertFirst("Starbuck");
    SLL.insertFirst("Tauhida");

    SLL.remove(3)
    SLL.printListData();

}