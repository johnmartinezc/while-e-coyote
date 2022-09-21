const prompt = require('prompt-sync')
({sigint: true})

let pickNumber = Number(prompt('Enter a positive number: '))
let num = 0
let numTwo = 1
let both = 0

console.log('Fibonacci Series:')

both = num + numTwo

while (both <= pickNumber) {

    console.log(both)

    num = numTwo
    numTwo = both
    both = num + numTwo
}