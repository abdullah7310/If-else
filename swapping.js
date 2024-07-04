const prompt = require('prompt-sync')()
let a = Number(prompt("Enter  number a >> "))
let b = Number(prompt("Enter number b >> "))

// a = a+b;
// b = a - b;
// a = a-b;
// console.log(`a is > ${a} and b is ${b}`);

//  ######################## BY THIRD VARIABLE  ################################
let temp = 0;
temp = a;
a = b;
b = temp;
console.log(`a is ${a} and b is ${b}`);


// ################## WELCOME NAME ##################################

// let name = prompt("enter name >>")
// console.log("Welcome",name)