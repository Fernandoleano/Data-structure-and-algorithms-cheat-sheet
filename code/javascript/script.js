/*
    author: Fernando Leano
    Every Data structure and algorithms is here!
    a linked list is  A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations. The elements in a linked list are linked using pointers url to learn more
    A linked list is time consuming and will take time and it's kinda hard to learn.
*/

// Doing linked list
console.log("Linked list:")

// const list = {
//     head: {
//         value: 6,
//         next: {
//             value: 10,                                             
//             next: {
//                 value: 12,
//                 next: {
//                     value: 3,
//                     next: null	
//                     }
//                 }
//             }
//         }
//     }
// console.log(list);


// Using node
// This is the first class
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

// Using linked list
// This is the second class
class LinkedList {
    // You can call head null hear
    constructor(head = null) {
        // Or you can just say this.head = null
        this.head = head;    
        this.tail = null;    
        this.size = 0;  
    }
    // Insert the first Node (prepend)
    prepend(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    // make a size
    // size() {
    //     let count = 0;
    //     let node = this.head;
    //     while(node) {
    //         count++;
    //         node = node.next;
    //     }
    //     return count;
    // }

    // Insert the last node
    append(data) {
        let node = new Node(data);
        let current;

        // if it's empyt make head
        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;

            while(current.next) {
                current = current.next;
            }
        }
        current.next = node
        this.size++;

        // this.size += 1;
        // const node = new Node(data, null);

        // let current;

        // if(this.head === null) {
        //     this.head = node;
        // } else {
        //     current = this.head;
        //     if(current.next){
        //         current = current.next;
        //     }
        //     current.next = node;
        // }
    }

    // Clear list
    // This will clear the whole list
    clear() {
        this.head = null;
        this.size = 0;
    }

    // Insert at index
    insertAt(data, index) {
        // If the index is out of range
        if(index > 0 && index > this.size) {
            return;
        }

        // if first index
        if(index === 0) {
            // I can also use prepend method()
            this.head = new Node(data, this.head);
            return;
        }

        const node = new Node(data);
        let current, previous;

        // set current first
        current = this.head = 0;
        let count = 0;

        while(count < index) {
            previous = current; // Node before the index
            count++;
            current = current.next; // Node after the index
        }
        node.next = current;
        previous.next = node;

        // Inceasing the size
        this.size++;
    }

    // finding the index
    find(index) {
        let current = this.head;
        let count = 0;
        while(current) {
            if (count == index) {
                console.log(current.data);
            }
            count++;
            current = current.next;
        }
        return null;
    }

    // Removing index
    remove(index) {
        if(index > 0 && index > this.size) {
            return;
        }

        let current = this.head;
        let previous;
        let count = 0;

        // Remove first
        if (index === 0) {
            this.head = current.next;
        } else {
            while(count < index) {
                count++;
                previous = current.next;
                current = current.next;
            }
            previous.next = current.next;
        }
        // We will decrement this
        this.size--;
    }

    // Print list data
    printData() {
        let current = this.head;

        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }

    // add(value) {    
    //     let node = new Node(value);
    // }
}

const linkedList = new LinkedList();

linkedList.prepend(100);
linkedList.prepend(200);
linkedList.prepend(300);

linkedList.append(400);

linkedList.remove(1);

linkedList.find(3);
linkedList.find(2);
linkedList.find(1);

// Un comment this if you need to clear the whole list
// linkedList.clear();

// linkedList.insertAt(500, 2);

linkedList.printData();

// linkedList.size(100);

console.log(linkedList);

console.log("-------------------------------------------")
