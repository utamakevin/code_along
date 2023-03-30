// Create a program that prints a random number between 1 to 6 (inclusive)

// example usage in the terminal:

// % node dice.js
// 5
// % node dice.js
// 3
// % node dice.js
// 5
// % node dice.js
// 1
// % node dice.js
// 6


let baseNumber = 6

let randomNumber = 1 + Math.floor(Math.random() * baseNumber)


if (process.argv[2] !== undefined) {
    baseNumber = process.argv[2]
}



console.log(randomNumber)




// scope - where a var is declared, it can only be called in that hierarchy (or lower)