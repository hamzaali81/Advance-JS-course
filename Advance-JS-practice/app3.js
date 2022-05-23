// Arrays
const strings = 
['x','a','b','c','d'];
// 0  1   2   3   4     (Re assign index)
// 4*4 = 16 bytes of storage

console.log(strings[2]);
console.log(strings.push('e')); // O(1)
console.log(strings);


console.log(strings.pop());  // O(1)
console.log(strings);

console.log(strings.unshift('x'));  // O(n)  (Depending on size of array)
console.log(strings);

// console.log(strings.shift());  
// console.log(strings);

// splice
strings.splice(2,0, 'alien'); // startIndex  Howmanydelete Add  O(n/2)
console.log(strings);

// Javascript Class

// Reference type
// Context 
// Instantiation

// 1. Reference Type
console.log([] === []);
console.log([1]===[1]);

const obj1 = {value: 10};
var obj2 = obj1;
var obj2 = {value: 10};
// console.log(obj2===obj3);
// console.log(obj1===obj2);

// true Number Null string undefined false (Primitive type) (They created by programmer) (Immutable everytime)
// Object and Array (Non-primitive type) (Reference type)

// [] are just objects



// Context vs scope

// Scope
// function() {
//     let a = a; // Variable acccess
// }

//  Context: Where we are within the object

console.log(window);
console.log(window === this);
// console.log(this.alert());
console.log(this); // What object inside
const obj = {
    a: function() {
        console.log(this);
    }
};

console.log(this.a);


// instantiation
// Make a copy of object and reuse the code

class Player {
    constructor(name, type) {
    this.name = name;
    this.type = type;
    };

    introduce(){
        console.log(`Hi I am ${this.name}, I am a ${this.type}`);
    }
};


class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
    }
    play(){
        console.log(`WEEEEEEE I am a ${this.type}`);
    }
};


// const wizard1 = new Wizard('Shelly', 'magic');
const wizard1 = new Wizard('Shelly', 'magic'); // new keyword is an Instance 
console.log(wizard1);

// Implementing an array

class MyArray {
    constructor() {
      this.length = 0;
      this.data = {};
    }
    get(index) {
      return this.data[index];
    }
    push(item) {
      this.data[this.length] = item;
      this.length++;
      return this.data;
    }
    pop() {
      const lastItem = this.data[this.length - 1];
      delete this.data[this.length - 1];
      this.length--;
      return lastItem;
    }
    deleteAtIndex(index) {
      const item = this.data[index];
      this.shiftItems(index);
      return item;
    }
    shiftItems(index) {
      for (let i = index; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1];
      }
      console.log(this.data[this.length - 1]);
      delete this.data[this.length - 1];
      this.length--;
    }
  }
  
  const myArray = new MyArray();
  myArray.push('hi');
  myArray.push('you');
  myArray.push('!');
  myArray.pop();
  myArray.deleteAtIndex(0);
  myArray.push('are');
  myArray.push('nice');
  myArray.shiftItems(0);
console.log(myArray);


// Strings and Array
// string simply used arrays of characters
// Tips
// First Convert the split into an array

// Exercise String
// Create a function that reverses a string:
//'Hi My name is Andrei' should be:
// 'irednA si eman iH

// function reverseArr(str) {
//   const array = str.split('');

//   for (let i = array.length -1; i >= 0; i--) {
//     // 5 > 0
//     console.log(array[i]);
   
//   }   
// };

// reverseArr('hamza is');


// Exercise Merge Sorted Arrays'
// mergeSortedArrays([0,3,4,31], [4,6,30]);
// [0,3,4,4,6,30,31]

function sortedArray(arr1, arr2) {
  
  
}
sortedArray([0,3,4,31], [4,6,30])


// Exercises






















































































































































































