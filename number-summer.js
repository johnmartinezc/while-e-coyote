const prompt = require('prompt-sync')
({sigint: true})

console.log("Enter some numbers (type 'done' when complete)")

let number = Number(prompt("> "))

let sum = 0

while(number > 0){

    sum += number
    number = Number(prompt("> "))
}
console.log("Those numbers sum to " + sum)
