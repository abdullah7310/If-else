const prompt = require('prompt-sync')()
let a = Number(prompt("enter first number >> "))
let b = Number(prompt("enter second number >> "))
let average ;
average = (a+b)/2;
// average = Math.floor(a/b)
console.log(average);