// process.argv is the name of the array
// argv access every item written in the terminal into an array called process.argv

let nickname = process.argv[2]
let numberOfCupcakes = 5

console.log("hello " + nickname + "! you can have " + numberOfCupcakes + " cupcakes.")

// string templates - syntax
// template strings - interpolation
// between ${} can be any valid js expression
// it has to be backticks instead of quotation marks

console.log(`hello ${nickname}! you can have ${numberOfCupcakes} cupcakes`)