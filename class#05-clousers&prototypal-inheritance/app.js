// function printName() {
//     return 'Hamza Ali'
// }

// function findName() {
//     return printName()
// }

// function sayName() {
//     return findName()
// }

// // console.log(this.sayName() === window.sayName(), this);

// // Hoisting Concepts

// // 
// // function myfunc(person1, person2, ...args) {
// //     console.log(arguments);
// //     console.log(args);
// //     console.log(Array.from(arguments));
// //     return `${person1} and ${person2} both are good friends`;
// // }

// // myfunc('hamza', 'ali');
// function myfunc(...args) {
//     console.log(arguments);
//     console.log(args);
//     console.log(Array.from(arguments));
//     return `${args[0]} and ${args[1]} both are good friends`;
// }

// myfunc('hamza', 'ali');
// console.log(myfunc('hamza', 'ali'));


// function myFun() {
//   for (var i = 0; i < 10; i++) {
//       setTimeout(()=> {
//           console.log(i);
//       },)
      
//   }    
// }

// myFun()


// Clousers

// function one() {
//   return 1
// };
// one();

// const obj1 = {
//   two: function() {
//     return 2
//   }
// };

// obj1.two();

// function three() {
//   return 3
// }

// three.call()

// const four = new Function('num,num2','return num+num2');

// console.log(four(2, 2));

// function wohoo() {
//     console.log('whoo');
// };


// console.log(wohoo.name);

// Functions are first class citizens in JS 
// 1
// var stuff = function () {}

// // 2 
// function a(fn) {
//     fn();
// }

// a(function() {
//   console.log('Hi there')
// });

// function b() {
//     return function c() {
//         console.log('bye bye');
//     }
// };

// var result = b()();

// for (let i = 0; i <= 5; i++) {
//     function name() {
//         console.log('Hello Bahyion');
//     }
//     name()
// }

// HOC
// Case
// function letAdminPanel() {
//     let array= [];
//     for (let i = 0; i<10000000; i++) {
//     array.push(i)
//     }
//     return 'Access To Users'
// };
// letAdminPanel();
// console.log(letAdminPanel());
// var result = letAdminPanel();
// console.log(result);

// function userPanel(user) {
//     let array= [];
//     for (let i = 0; i<10000000; i++) {
//     array.push(i)
//     }
//     return 'Access To Users ' + user
// };
// // letAdminPanel();
// console.log(userPanel('hamza'));

// const giveAccessTo = (name)=> {
//     return 'Acess Greanted to ' + name
// }

// function authenticate(verify) {
//     let array = [];
//     for (let i = 0; i< verify; i++){
//         array.push(i)
//     }
//     // return true;
//     return giveAccessTo(person.name)
// }

// function sing(person) {
//     return 'la la la my name is ' + person.name
// }

// function letPerson(person, fn) { // ++ tell it what data to user + function
//     if(person.level === 'admin') {
//         // return fn(5000000);
//         return fn(person);
//     } else if(person.level === 'user') {
//     //    return fn(100000)
//        return fn(person)
//     } 
//     return giveAccessTo(person.name)
// }

// // const result = letPerson({level: 'user', name: 'Time'}, authenticate)
// const result = letPerson({level: 'user', name: 'Sally'}, sing)
// console.log(result);
// function letUserLogin(user) {
//     // What Data to use

//     let array = [];
//     for (let i = 0; i<10000000; i++) {
//         array.push(i)
//     }
//     return giveAccessTo(user)
// }

// const result =letUserLogin('koko');
// console.log(result);


// Task 

// const multiply

// multiplyTwo
// multiplyByTen

// function multiply(a) {
//     return function(b){
//     return a*b
//     }
// };

// const result2 = multiply(10)(2);
// console.log(result2);

// const multiply = (a)=> (b)=> a * b;
// const result3 = multiply(10)(2);
// console.log(result3);


// Clousers

// function a() {
//     let grandpa = 'grandpa';
//     return function b() {
//        let father = 'father'
//     return function c(){
//           let son = 'son';
//           return `${grandpa} > ${father} > ${son}`
//     }
        
//     }
// };

// const result4 = a()()();
// console.log(result4);


// function boo(string) {
//     return function(name){
//         return function(name2){
//         console.log(`${string} ${name} ${name2}`);
//         }
//     }   
// };

// const result5 = boo('koko')('hamza')('ali');


// function callMeMaybe() {
//     setTimeout(() => {
//         console.log(callMe);
//     }, 4000)
//     const callMe = 'Hi! i am here'
// };
// callMeMaybe()
// console.log(callMeMaybe());


// Array() fill()

// Memory Efficient
// function heavyDuty(index) {
//     const bigArray = new Array(10).fill('#️⃣');
//     console.log('Hello Bhai');
//     return bigArray[index]
// }
// function heavyDuty2() {
//     const bigArray = new Array(10).fill('#️⃣');
//     console.log('Hello Bhai');
//     return function(index) {
//         return bigArray[index]
//     }
// }

// const arrRes = heavyDuty(9)
// console.log(arrRes);
// const arrRes2 = heavyDuty2()
// console.log(arrRes2(2));
// Encasulation

// const makeNuclearButton = ()=> {
//     let totalWithoutDestruction = 0;

//     const passTime = ()=>  totalWithoutDestruction++;

//     const totalPeaceTime = () => totalWithoutDestruction;

//     const launch = ()=> {
//         totalWithoutDestruction =-1;
//         return '🧹'
//     }
//     setInterval(passTime, 1000);

//     return {
//         launch: launch,
//         totalPeaceTime: totalPeaceTime
//     }
 
// }

// const actionBtn = makeNuclearButton();
// console.log(actionBtn.launch());
// console.log(actionBtn.totalPeaceTime());

// console.log(actionBtn.());
// console.log(actionBtn.());

// Exercise 

// let view;

// function initialize() {
//     // view = 'Ohh bhai';
//     let counter = 0;
//     // console.log('view has been set!!');
    
//     return function() {
//         if(counter > 0) {
//         return 
//         } else {
//     view = 'Ohh bhai';
//     counter++;
//     console.log('view has been set!!');
//         }
//     }
// };

// const finalfun = initialize()();
// console.log(finalfun);
// console.log(finalfun);
// console.log(finalfun);
// initialize()
// console.log(initialize());

// Exercise

// const array = [1,2,3,4];
// for (var i = 0; i < array.length; i++) {
//    (function() {
//        setTimeout(() => {
//         console.log('I am at index',i);
//     }, 3000)})()
// }

// Protypal Inheritance
// classical or prototypal inheritance
// const arr = [];
// console.log(arr.__proto__.__proto__);
 
// function myfun() {};
// myfun()
// console.log(myfun.__proto__.__proto__);


// const obj = {};
// console.log(obj.__proto__);


// let dragon = {
//     name: "tanya",
//     fire: true,
//     fight() {
//         return 5
//     },
//     sing() {
//         if(this.fire) {

//             return `I am ${this.name}, the breather of fire`
//         }
//     }
// }

// let lizard = {
//     name: "kiki",
//     fight(){
//         return 1
//     }
// };

// const singLizard = dragon.sing.bind(lizard);
// console.log(singLizard());
// console.log(dragon.__proto__);
// console.log(dragon.🆗);

// lizard.__proto__ = dragon;
// console.log((lizard.sing()))

// for(let prop in lizard) {
//     if(lizard.hasOwnProperty(prop)) {

//         console.log(prop);
//     }
// }

// const obj = {}
// console.log(obj.__proto__.__proto__); 

// console.log(lizard.ahha());
// console.log(lizard.ahha);

// const obj = { name: 'Sally' };
// console.log(obj.hasOwnProperty('name'));


// function myfunc() {}
// // myfunc()
// console.log(myfunc.hasOwnProperty('bind')); //f
// console.log(myfunc.hasOwnProperty('call')); //f
// console.log(myfunc.hasOwnProperty('apply')); //f
// console.log(myfunc.hasOwnProperty('bname')); //true

// // Own Prototypes

// let human = {
//     mortal: true
// };

// let socrates = Object.create(human);
// socrates.age = 45;
// console.log(human.isPrototypeOf(socrates));
// console.log(socrates.mortal);


// // Only functions have the prototype property

// function multiplyBy5(num) {
//     return num * 5
// };
// // multiplyBy5.prototype

// const resArr = multiplyBy5(2);
// console.log(resArr.prototype);


//#1
// Date object => to have new method .lastYear()
// which shows you last year 'YYYY' format
// new Date('1900-10-10').lastYear();
//1899
// const obj = {
//     lastYear: 1899
// }

// const date = new Date('1900-10-10');
// date.__proto__ = obj;
// console.log(date.lastYear);

Date.prototype.lastYear = function () {
    return this.getFullYear() -1
}

const date = new Date().lastYear();
console.log(date);

// console.log(date.isPrototypeOf(obj));

// console.log(date.__proto__);

// Bonus 
// Modify .map() to print '*' at the end of each item

Array.prototype.map = function () {
    let arr = [];
    for(var i= 0; i < this.length; i++){
    arr.push(this[i]+ '*️⃣')
    }
    return arr;
}


console.log([1,2,3].map());
// 1*️⃣, 2*️⃣, 3*️⃣


// How would you be able to create your own .bind() method using call or apply.
// Hint:
// Function.prototype.bind = function(){
// }
// See the attached solution when you are ready!

