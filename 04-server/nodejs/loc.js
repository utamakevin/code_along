// lines of code
// number of lines in a file

/*

% node loc.js ex1.js
9

% node loc.js ex2.js
4

*/

let counter = 1

const fs = require("fs")
const file = fs.readFileSync("ex1.js", "utf-8")

for(eachCharacter of file) {
    if (eachCharacter === "\n") {
        counter++
    }
}

console.log(counter)

// const lines = file.split("\n")
// console.log(lines.length)