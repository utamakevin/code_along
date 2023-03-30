// destructuring
// deconstructing
// pattern matching
// syntactic sugar - you don't need it

let fruits = ['mango', 'orange', 'kiwi']

// console.log(fruits[0])

let [firstElem, _, third] = fruits

console.log(firstElem)
console.log(third)

function getSelectedFruit() {
    // crazy processing

    return ['banana', true] // a static array is called a tuple
}

// let arr = getSelectedFruit()

// if(arr[1] === true)


let [fruit, iSuccess] = getSelectedFruit()

if(isSuccess) {

}

// object destructuring //

function getBankAccount() {
    // processing...


    return {
        username: 'amal',
        type: 'savings',
        balance: 1,
    }
}

// let obj = getBankAccount()
// console.log(obj.balance)

let { username: username } = getBankAccount()
// or do a short hand like this
let { username } = getBankAccount()