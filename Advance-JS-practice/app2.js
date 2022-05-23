// Big O
// Given 2 arrays, create a function that 
// let's a user know (true/false) wheteher



// 2 parameters --arrays no size limit
// return true or false
// O(n^2)


// Solution 01
// function containsCommonItem(arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if(arr1[i] === arr2[j]) {
//                 return true
//             }
            
//         }
        
//     }

//     return false;
// };

// O(a*b) Time Complexity
// O(1) - Space Complexity

// const resArr1 = containsCommonItem([1,2,3,4,5], [0,9,8]);
// console.log(resArr1);


// Solution 02
// array1 ==> obj {
//     a: true,
//     b: true,
//     c: true,
//     x: true
// };

// array2[index] === obj.properties

const array1 = ['a','b','c','x'];
const array2 = ['z','y','a'];

// # Code modularizing (Small bits of piece)
// #proper name
// Error free functions test
function containsCommonItem2(arr1, arr2) {
    // loop through first array and create object
    // where properties === items in the array
    // Can we assume always 2 parameters
    let map = {};
    for (let i = 0; i < arr1.length; i++) {
        // console.log(!map[i]);
        if(!map[arr1[i]]) { // !false = true
            const item = arr1[i];
            map[item] = true;
        }         
    };

    // Time Complexit O(a+b)
    // Space Complexity O(a) // because of object

    // console.log(map);
    // loop through second array and check if item
    // in second array exists on created object

    for (let j = 0; j < arr2.length; j++) {
        // const element = arr2[j];
        if(map[arr2[j]]) {
        return true;
        }
        
    };
    return false;
}

const res2 = containsCommonItem2(array1,array2);
console.log(res2);
// O(a+b) Time Complexity is bettter

// Solution 03
// Better Solution

function containsCommonItem3(arr1, arr2) {
    {
        return arr1.some(item => arr2.includes(item));
    }
};

const res3 = containsCommonItem3(array1, array2);
console.log(res3);

// Exercise 02

function hasPairWithSum1(arr, sum) {
    
}
function hasPairWithSum2(arr, sum) {
    
}



















