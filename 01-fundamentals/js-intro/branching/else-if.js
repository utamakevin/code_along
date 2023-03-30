// For this lab, you'll be researching JavaScript's else if statement, and creating one of your own.

// Write an else if statement that checks to see if a variable called year is in the past, present, or future.

// You'll console.log three possible messages depending on what year it is...

// "I'm in the present!" if the year is equal to 2015

// "Whoa! Blast from the past!" if the year is less than 2015

// "Greetings from the future!" if the year is greater than 2015

// Bonus Challenge Research JavaScript's date methods, and find one that will return to you the current, four digit year. Once you have grabbed that year, assign it to a variable, and use that in your else if statement.



let currentYear = new Date().getFullYear()

let year = process.argv[2]

if (year == currentYear) {
    console.log("I'm in the present!")
} else if (year < currentYear) {
    console.log("Whoa! Blast from the past!")
} else if (year > currentYear) {
    console.log("Greetings from the future!")
} else {
    console.log("I did not expect that response")
}