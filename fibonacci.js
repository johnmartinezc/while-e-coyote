const prompt = require('prompt-sync')
({sigint: true})

let pickNumber = Number(prompt('Enter a positive number: '))
let num = 0
let numTwo = 1
let userNumber = Number()
let both = 0


console.log('Fibonacci Series:')

both = num + numTwo

while (both < pickNumber) {
    if(both === 0){
        console.log(0)
    }else if(both === 1){
        console.log(1)
    }else{
    userNumber = num + numTwo 
    console.log(num + numTwo )
    num = numTwo
    numTwo = userNumber
    
}
both++
}