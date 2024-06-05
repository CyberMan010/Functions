// -Q1- :
//  Write a JavaScript function that reverses a number.

// const num = prompt("enter a number");
// function reverseGivenInteger(num){
//     var reversed = 0
//     while(num > 0){
//         let lastnumber = num %10;
//         reversed = reversed * 10 +
// lastnumber;
//         num = Math.floor(num/10)

//     }

//    return reversed
// }
// console.log(`Reversed integr is : ${reverseGivenInteger(num)}`)

// -Q2- :
//   Use a loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the console .

// for (var x = 0; x <= 15; x++) {
//     // Checking if the current number is 0
//     if (x === 0) {
//         console.log(x + " is even");
//     }
//     // Checking if the current number is even
//     else if (x % 2 === 0) {
//         console.log(x + " is even");
//     }
//     // If the number is not 0 and not even, it is odd
//     else {
//         console.log(x + " is odd");
//     }
// }

// -Q3- :
// Write a function that returns a string that has letters in alphabetical order.

// function alpha(str) {
//     return str.split('').sort().join('');
// }
// console.log(alpha('orange'))


// Q4 :
//  Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number.

// var num = window.prompt();
// var str = num.toString();
// var result = [str[0]];
// for (var x = 1; x < str.length; x++){
//     if (str[x - 1] % 2 === 0 && str[x] % 2 === 0) {
//         result.push('-', str[x]);
//     }
//     else {
//         result.push(str[x]);
//     }
    
// }
// console.log(result.join(''));

// -Q5-

// const age = prompt("enter age");
// const beverage = age >= 18 ? "The user is Adult" : "The user is Minor";
// console.log(beverage);