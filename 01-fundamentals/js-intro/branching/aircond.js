// setup 3 variables for:

// - the current temperature,
// - if the A/C is functional,
// - and what temperature they wish it was.

// If the airconditioner is functional and the current temperature is above the the desired temperature... display "Turn on the A/C Please"

// If the airconditioner is non-functional and the current temperature is above the the desired temperature... display "Fix the A/C now! It's hot!"

// If the airconditioner is non-functional and the current temperature is below the the desired temperature... display "Fix the A/C whenever you have the chance... It's cool..."


let currentTemp = process.argv[2]
let isFunctional = process.argv[3]
let targetTemp = process.argv[4]

if (isFunctional == true && currentTemp > targetTemp) {
    console.log("Turn on the A/C please!")
} else if (isFunctional != true && currentTemp > targetTemp) {
    console.log("Fix the A/C now! It's hot!")
} else if (isFunctional != true && currentTemp < targetTemp) {
    console.log("Fix the A/C whenever you have the chance... It's cool...")
}


// conditional (ternary)
// console.log(functional ? 'Turn on the A/C please' : 'Fix the A/C now! It's hot') will check 'functional', if true use the first value, if not use the one after the colon.