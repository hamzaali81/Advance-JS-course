// Hash Tables

let user = {
  age: 54,
  name: 'Kylie',
  magic: true,
  scream: function() {
    console.log('ahhhhhhh');
  }
};

user.spell = 'abra';
user.scream();  // O(1) 
console.log(user);

// O(n/k) k = size of constant
// 1. Two Implementation
// 1. Linked list

// Hash tables implement in different languages

// Map Allows any data type key 
// In object no order. Data insert randomly
// In object only save string
// Map Maintain insertion

// Map  
// Set

// const f = new Map();
// const g = new Set(); // Only keys no store values

// Exercise 
class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {  // private method use _hash()
      // console.log(this.data.length);  // O(1)
        let hash = 0;
        console.log(key.length);
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;

        }
        return hash;
    }

    set(key, value) {  //O(1)
      let address = this._hash(key);
      console.log(address);
      console.log(this.data);
      console.log(this.data[address]);
      console.log();
      if(!this.data[address]) {
        this.data[address] = [];
        // this.data[address].push([key, value]);
        // console.log(this.data);
      } 
      this.data[address].push([key, value]);
      console.log(this.data);
      return this.data; 
    }

    get(key){  // O(!)
    let address = this._hash(key);
    const currentBucket = this.data[address];
    console.log(currentBucket);
    if (currentBucket) {
    for (let i = 0; i < currentBucket.length; i++) {
     
      if(currentBucket[i][0] === key) {
      return currentBucket[i][1]
      }
    }
    } // O(1)
     return undefined;
    }

    keys(){
      const keysArray = [];
      for(let i = 0; i<this.data.length; i++){
        if(this.data[i]) {
          console.log(this.data[i][0]);
          keysArray.push(this.data[i][0][0]);
        }
      }
      return keysArray;
    }
};



const myHashTable = new HashTable(50);
// myHashTable.set('grapes', 100);
// myHashTable.get('grapes');
const hashLength =  myHashTable._hash('grapes');
console.log(hashLength);
myHashTable.set('grapes', 100000);
// myHashTable.set('apples', 54);
// myHashTable.set('oranges', 2);
// myHashTable.get('oranges', 2);
const getArray = myHashTable.get('grapes');
console.log(getArray);

const getKeys = myHashTable.keys();
console.log(getKeys);
// console.log(myHashTable._hash('grapes'));

// Google Question

// Which number repeated first
// Given an array = [2,5,1,2,3,5,1,2,4]
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]
// It should return 1

// Given an array = [2,3,4,5]
// It should return undefined


























