// Forgot how old you are? Calculate it!

// - assume you have birth year, current year.
// - calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either 17 or 18"

const birthYear = 1997
let currentYear = 2023

let age = currentYear - birthYear

console.log("You are either " + age + " or " + (age - 1))