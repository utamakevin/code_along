// print out all even numbers between 20 and 30 inclusive.

let i = 20
// while (i <= 30) {
//     console.log(i)
//     i = i + 2
// }

while (i <= 30) {
    if (i % 2 === 0) {
        console.log(i)
    }
    i++
}