const prompt = require('prompt-sync')
({sigint: true})


let str = String(prompt("Enter a string: "))

let double = ""

while(double.length <= 10){
    console.log( double += str)       
}