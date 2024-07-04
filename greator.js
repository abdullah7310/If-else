const prompt = require('prompt-sync')()

let a = Number(prompt("enter a > "))
let b = Number(prompt("enter b > "))
let c = Number(prompt("enter c > "))
let d = Number(prompt("enter d > "))

// #################################### GREATOR IN THREE INPUTS #################################################

// if(a>b){
//     if(a>c){
//         console.log("greator is > ",a);
//     }else{
//         console.log("greator is > ",c);
//     }
// }else if(b>c){
//     console.log("greator is > ",b);
// }else{
//     console.log("greator is > ",c);
// }


// ####################################  GREATOR IN FOUR INPUTS  ########################################
if(a>b){
    if(a>c){
        if(a>d){
            console.log("a is greator >> ",a);
        }else{
            console.log("d is greator >> ",d);
        }
    }else{
        if(c>d){
            console.log("c is greator >> ",c);
        }else{
            console.log("d is greator >> ",d);
        }
    }
}