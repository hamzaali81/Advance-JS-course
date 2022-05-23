// Problem Plus Minus

// var positiveNumber = 0;
// var negativeNumber = 0;
// var zeroCount = 0;
// function plusMinus(arr) {
    // var n = arr.length;
//     // Write your code here
//     arr.forEach((num)=> {
//         if(num > 0) {
//             // console.log(num);
//            ++positiveNumber; 
//         } else if (num < 0) {
//             ++negativeNumber;
//             // console.log(num);
//         } else {
//             ++zeroCount;
//         }
//     });
//   positiveNumber = (positiveNumber / n).toFixed(6);
//   negativeNumber = (negativeNumber / n).toFixed(6);
//   zeroCount = (zeroCount / n).toFixed(6);
//   console.log(positiveNumber);
//   console.log(negativeNumber);
//   console.log(zeroCount);

// }

// // plusMinus([1,1,0,-1,-1]);
// plusMinus([-4, 3, -9, 0, 4, 1]);




// Grade Challenge
// function gradingStudents(grades) {
//     // Write your code here
//    const resultArr = grades.map((grade)=> {
       
//     if(grade > 33 && grade > 37 && grade % 5 === 3) {
//           grade = grade + 2;
//            return grade 
//        } else if(grade > 33 && grade > 37 && grade % 5 === 4) {
//       grade = grade + 1;
//       return grade;
//        }  else if(grade > 33 && grade % 5 === 2) {
//           return grade
//        } else if(grade >= 33) {
//        return grade;
//        }
//        else {
//            console.log(grade);
//         return grade;
//         // return null;
//        }
//     }
    
//     );
//     return resultArr
    
// };
// const array1 = gradingStudents([4, 73, 67, 38, 84,33]);
// const array1 = gradingStudents([2,37,38]);
// const array1 = gradingStudents([23, 80, 96, 18, 73, 78, 60, 60,15,45,15,10,5,46,87,33,60,14,71,65, 2, 5, 97, 0]);
// const array1 = gradingStudents([44, 84, 94, 18, 73, 78, 60, 60,15,45,15,10,5,46,87,33,60,14,71,65, 2, 5, 97, 0]);
// console.log(array1);


// Apple and mango

// function countApplesAndOranges(s, t, a, b, apples, oranges) {
//     // Write your code here
//     let applesCount=  0;
//     let orangesCount=  0;

//     for (let i = 0; i < apples.length; i++) {
//         if(apples[i] + a >= s && apples[i] + a <= t) {
//             applesCount++;
            
//         }   
//     };

//     for (let j = 0; j < oranges.length; j++) {
//         if(oranges[j] + b >= s && oranges[j]+ b <= t) {
//             orangesCount++;
//         }
//     };
//     console.log(applesCount);
//     console.log(orangesCount);
// };


// countApplesAndOranges(7, 10, 4, 12, [1,1,2], [3,2]);



// Kangroo 

function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    // const total_jump_distance = x1 + x2;
    // const total_jump_location = v1 + v2;
    // const total_sum_distance = total_jump_distance + total_jump_location;

    // const Jump_K1 = x1 + v1;
    // const Jump_K2 = x2 + v2;
    
    // const sum_dsitance = Jump_K1 + Jump_K2;
    // if(sum_dsitance === total_sum_distance) {
    //     return 'YES'
    // } else {
    //     return 'NO';
    // }

    // if(x2 > x1 && v2 > v1) {
        
    //     return 'YES';
    // } else {
    //     console.log( v2 > v1);
    //     return 'NO'
    // }

    // const distance1 = x1 + v1;
    // // console.log(distance1);
    // const distance2 = (x2 + v2)/2;
    // console.log(x1%x2);
    // console.log(v1%v2);
    // console.log(x1%x2 === x1);
    // console.log(v2%v1 === v2);
    // console.log(distance2);
    // if((x1%x2 === x1 && v2%v1 === v2)) {
    // // if(distance1 === distance2 || (x1%x2 === x1 && v2%v1 === v2)) {
    //     return 'YES';
    // } else {
    //     return 'NO';
    // }
    // console.log(x1 + v1 * 10000 == x2 + v2 * 10000);
    
    // if(x1 < x2)
     // A 'good' solution
     let result = 'NO';
     for (let i = 0; i < 10000 && result == 'NO'; i++) {
         console.log(x1 + v1 * i );
         if (x1 + v1 * i == x2 + v2 * i) {
             result = 'YES';
         }
     }
     return result;
};

// const jump_rate_compare = kangaroo(0,3,4,2); // YES
const jump_rate_compare = kangaroo(14,4,98,2); // YES
// const jump_rate_compare = kangaroo(0,2,5,3); // NO
// const jump_rate_compare = kangaroo(21,6,47,3); // NO
console.log(jump_rate_compare);
// 21 6 47 3
// NO


// 14 4 98 2
// YES 







































