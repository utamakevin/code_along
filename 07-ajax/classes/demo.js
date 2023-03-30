// new Date() // calling a function to return a new date object
// new Error() 

// consistent way to create objects

// let user = {
//     firstname: 'jack',
//     lastname: 'hamblin',
//     fullname(user) {
//         console.log(`${user.firstname} ${user.lastname}`)
//     }
// }





// function createUser(firstname, lastname) {
//     return {
//         firstname,
//         lastname,
//     }
// }

// console.log(createUser('jack', 'hamblin'))

// console.log(user)
// fullname(user)


// object oriented programming

// a template to create objects - class: classification

const User = require('./user.js')

// separate instances of the User objects
let u1 = new User('tales', 'pinto')
let u2 = new User('jack', 'hamblin')
let u3 = new User('maria', 'gottardello')

// console.log(u1, u2, u3)

console.log(u1.intro())
// console.log(u3.fullname())


// js is a big fan of properties

// computed properties
console.log(u3.fullname) 


