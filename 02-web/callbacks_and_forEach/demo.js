console.log("callbacks & loops & foreach")

const h1 = document.querySelector("h1")

function printHello() {
    console.log("hello")
}

// callback function
// first class function
// functions as values
    setTimeout(printHello, 5000) // this is called timer API - JS does not do it by itself (call a friend)

h1.addEventListener("click", printHello)


// forEach(array, whatYouWantToDoWithEachItem). array.forEach(whatYouWantToDoWithEachItem). whatYouWantToDoWithEachItem can be filled with function. 
let numbers = [1, 2, 3, 4, 5]
function doSomething(num) {
console.log('yay ' + num)
}
numbers.forEach(doSomething)
// the first argument in doSomething() is the each value of numbers
// you will get yay 1, yay 2, yay 3, …
// num = numbers[index]

let fruits = [
    {name: apple},
    {name: banana},
    {name: orange},
    {name: kiwi}
]


function doSomething() {
    console.log("do something")
}




//js version 5
fruits.forEach(function(fruit) {
    console.log(fruit.name)
})

// js version 6
for (const fruit of fruits) {
    console.log(fruit.name)
}

// this is how forEach built-in function works :
// my version
function myForEach(array, doSomething) {
    for(let i = 0; i < array.length; i++) {
        doSomething(array[i])
    }
}

// code along version

function myForEach(arr, callbackFn) {

    for (let index = 0; index < arr.length; index++) {

        let elem = arr[index]

        // callback signature
        callbackFn(elem)
    }
}

myForEach(fruits, function(fruit) {
    console.log(fruit.name)
})





// function dclaration
function double(num) {
    return num*2
}

// function expression
// long form, short form, even shorter form

var double = function(num) { return num*2 } // functions as values
var double = (num) => { return num*2 } // same as above, different form, arrow function

// one parameter () optional
const double = num => {
    return num * 2
}

// singel line expression {} optional
const double = num => num * 2