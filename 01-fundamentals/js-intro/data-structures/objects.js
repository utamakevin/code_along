// object
// key & value
// property name & property value
// dictionary
// object literal

let account = {
    name : "Akram",
    balance : 10_000_000,
    interestRate : 6,
    favNumbers: [13, 3, 5],
    favMovie: {title: "Interstellar", score: 9},
}

/* use a while loop to print out Akram's fav numbers


*/
let i = 0
while (i < account.favNumbers.length) {
    console.log(account.favNumbers[i])
    i++
}