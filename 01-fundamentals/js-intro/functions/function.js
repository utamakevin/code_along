console.log("fun fun function")

/* built in functions

let fruits = []

prompt()
alert()

console.log()
Math.random()
fruits.shift()
fruits.push()
fruits.pop()



-----------

data types - strings, numbers, booleans
branching - if statements - skip lines codes
loops - while, for - repeat lines code
functions - built in
    - performing a task
    - inputs & outputs - program/app - mini program
    - call on it - control
    - reusable

    -organising / grouping lines of codes - function - give lines of codes a name
    -give a return value, pass on to the next function, get return value, pass it on, ...
    ->[]->[]
    - "abc".toUpperCase().toLowerCase().toUpperCase()

*/

// many syntax for function in js
// user pass in a number and it retuns the number doubled

function double(number) { // parameter - defining a vaiable
    let result = number * 2
    return result
}


function areaOfCircle(radius)  {
    let area = Math.PI * Math.pow(radius, 2)
    return area
}


function plusOne(number) {
    number++
    return number
}

/* Max of two numbers:
Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript. Do some Googling to figure this out if you forget how conditionals work.
*/

function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}