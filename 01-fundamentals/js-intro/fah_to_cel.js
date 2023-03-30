// input
// processing
// output
// let fah = Number(process.argv[2]) will return number data type

let fah = 100

let cel = (fah - 32) * (5/9)

console.log(cel)

cel = (process.argv[2] - 32) * (5/9)

console.log(cel)

