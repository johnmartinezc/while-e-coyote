const prompt = require('prompt-sync')
({sigint: true})

console.log("Enter some numbers (type 'done' when complete)")

let number = prompt(Number(">"))

while(number !== 'done'){
    number = prompt()
    if (number === 'done'){
        console.log("the numbers add up to " + number)
    }
}