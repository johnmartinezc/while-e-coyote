const prompt = require('prompt-sync')
({sigint: true})

let x = Number(prompt("Enter a number: "))
let y = Number(prompt("Enter a number: "))


while(x % y !== 0){
      x++
        console.log(x )
        if(x % y ===0){
            console.log(x +" is divisible by " + y)
        }
      
       
    }