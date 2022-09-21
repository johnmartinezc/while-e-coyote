const prompt = require('prompt-sync')
({sigint: true})

let pickNumber = Number(prompt('Enter a positive number: '))
let n1 = 0
let n2 = 1
let nextTerm = 0

console.log('Fibonacci Series:')

nextTerm = n1 + n2

while (nextTerm <= pickNumber) {

    console.log(nextTerm)

    n1 = n2
    n2 = nextTerm
    nextTerm = n1 + n2
}