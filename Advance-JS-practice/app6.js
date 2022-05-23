// Linked List
const basket = ['apples', 'grapes', 'pears'];

// linked-list: apples --> grapes --> pears

// apples
// 8947 ---> grapes
//           8742----> pears
//                       372 ---> null

// Create a pointer 
// Obj1 and obj2 same location in memory
let obj1 = {a: 'hamza'};
let obj2 = obj1; // that points not the copy of object

// obj1.b = 'faizan';
obj1.a = 'ali';

 delete obj1;
console.log('1',obj1); // not delete because of garbage collection
console.log('2',obj2);

// JS is garbage collected because of memory is managed. 
// Pointer's is simply a reference to something else in memory.

// First Linked-List

// 10 --->5--->16

// let myLinkedList = {
//     head: {
//         value: 10, 
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// };

// class 08 Exercise
// In code donot repeat yourself

// class Node {
//     // Code here
//     constructor(value) {
//     this.value = value;
//     this.next = null
//     }
// }
// class LinkedList {
//     constructor(value) {
//     this.head = {
//         value: value,
//         next: null
//     },
//     this.tail = this.head;
//     this.length = 1;
// };

// append(value){
//     //Code here
//     // const newNode = {
//     //     value: value,
//     //     next: null
//     // };
//     const newNode = new Node(value);

//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
//     return this;
// }

// prepend (value){
//     // Code here
//     // Add begining
//     const newNode = {
//         value: value,
//         next: this.head
//     }

//     newNode.next = this.head;
//     this.head = newNode;
//     this.length++;
//     return this;
// }

// printList() {
//     const array = [];
//     let currentNode = this.head;
//     while (currentNode !== null) {
//     array.push(currentNode.value);
//     currentNode = currentNode.next;
//     }

//     return array;
// }
 
// insert(index, value){
//    // check params
//    if(index >= this.length) {
//    return this.append(value);
//    }

//    const newNode = {
//        value: value,
//        next: null
//    };
//          //    *-*
//         //   *
//     const leader = this.traverseToIndex(index - 1);
//     // traverse one by one looking
//     const holdingPointer = leader.next;
//     leader.next = newNode;
//     newNode.next = holdingPointer;
//     this.length++;
//     return this.printList()
// }

//  traverseToIndex(index) {
//      // check params
//      let counter = 0;
//      let currentNode = this.head;
//      while (counter !== index) {
//         currentNode = currentNode.next;
//         counter++;
//      }
//      return currentNode;
//  }

//  remove(index) {
//  // check params
//  const leader = this.traverseToIndex(index - 1);
//  const unwantedNode = leader.next;
//  leader.next = unwantedNode.next;
//  this.length--;
//  return this.printList();
//  }
// }
// const myLinkedList = new LinkedList(10)
// myLinkedList.append(5);
// myLinkedList.append(16);
// myLinkedList.printList();
// myLinkedList.insert(2, 99);
// myLinkedList.insert(1);
// console.log(myLinkedList.printList());

// // add 10,5,16,4
// // prepand 4,10,5,16
// // Node class every time create a new node



// Doubly Linked-List
class Node {
    // Code here
    constructor(value) {
    this.value = value;
    this.next = null
    }
}
class LinkedList {
    constructor(value) {
    this.head = {
        value: value,
        next: null
    },
    this.tail = this.head;
    this.length = 1;
};

append(value){
    //Code here
    // const newNode = {
    //     value: value,
    //     next: null
    // };
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
}

prepend (value){
    // Code here
    // Add begining
    const newNode = {
        value: value,
        next: this.head
    }

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
}

printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
    array.push(currentNode.value);
    currentNode = currentNode.next;
    }

    return array;
}
 
insert(index, value){
   // check params
   if(index >= this.length) {
   return this.append(value);
   }

   const newNode = {
       value: value,
       next: null
   };
         //    *-*
        //   *
    const leader = this.traverseToIndex(index - 1);
    // traverse one by one looking
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList()
}

 traverseToIndex(index) {
     // check params
     let counter = 0;
     let currentNode = this.head;
     while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
     }
     return currentNode;
 }

 remove(index) {
 // check params
 const leader = this.traverseToIndex(index - 1);
 const unwantedNode = leader.next;
 leader.next = unwantedNode.next;
 this.length--;
 return this.printList();
 }
}
const myLinkedList = new LinkedList(10)
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.printList();
myLinkedList.insert(2, 99);
myLinkedList.insert(1);
console.log(myLinkedList.printList());

// add 10,5,16,4
// prepand 4,10,5,16
// Node class every time create a new node























