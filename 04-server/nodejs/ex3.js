// built in modules
// libraries added to node
// friends to help js in node

// standard library
// node api

// one of them - fs

// modules - commonjs module system

const fs = require("fs") // file system module - returns an object of functions

const file = fs.readFileSync("sum.js", "utf-8")

// console.log(file.toString())

console.log(file)