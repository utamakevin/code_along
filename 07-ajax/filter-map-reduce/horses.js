let horses = [
    {
      name: 'maythehorsebewithu',
      active: true,
      country: 'AUS',
      yearOfBirth: 2000,
      hourlyRate: 85,
      daysWorked: 400
    },
    {
      name: 'my wife knows everthing',
      active: true,
      country: 'USA',
      yearOfBirth: 2007,
      hourlyRate: 50,
      daysWorked: 250    
    },
    {
      name: 'better loosen up',
      active: false,
      country: 'AUS',
      yearOfBirth: 1985,
      hourlyRate: 15,
      daysWorked: 200      
    },
    {
      name: 'hoof hearted',
      active: false,
      country: 'AUS',
      yearOfBirth: 1981,
      hourlyRate: 150,
      daysWorked: 100    
    },
    {
      name: 'pony',
      active: false,
      country: 'AUS',
      yearOfBirth: 2003,
      hourlyRate: 30,
      daysWorked: 700   
    },
    {
      name: 'sunny boy',
      active: true,
      country: 'AUS',
      yearOfBirth: 2003,   
      hourlyRate: 110,
      daysWorked: 515    
    }  
]

// transforming
// [h, h, h, h, h, h]
// [ah, ah, ah, ah]
//   |   |   |   |
// [ $,  $,  $,  $ ]


// console.log(
//     horses
//     .filter(horse => horse.country === 'AUS')
//     .map(horse => horse.daysWorked * 8 * horse.hourlyRate)
//     .filter(earning => earning > 30_000)
//     .reduce((total, earning) => total + earning)
// )

// fp - point free mode

function isAussieHorse(horse) {
  return horse.country === 'AUS'
}

function calcEarnings(horse) {
  return horse.daysWorked * 8 * horse.hourlyRate
}

function sum(a, b) {
  return a + b
}

console.log(isAussieHorse(horses[0]))

// horses
//   filter by aussie horse
//   map each to calculate earnings
//   reduce sum all the earnings

horses
  .filter(isAussieHorse)
  .map(calcEarnings)
  .reduce(sum)





  
//   calculate the total lifetime earnings of all (active or inactive) australian horses who earned more than 30,000

// facts

// you can calc the lifetime earning of a horse by multiplying number of hours worked with the hourly rate

// all horse work 8 hours per day
  
function lifetimeEarning() {
    let totalResult = 0
    let result
    for(horse of horses) {
        result = horse.daysWorked * 8 * horse.hourlyRate
        
        if(result > 30000 && horse.country === 'AUS') {
            totalResult += result
        }
    }
    console.log(totalResult)
}




// lifetimeEarning()
  
// higher order functions - that we can use in javascript
// functional mindset

// let numbers = [3,5,6,22,1,56,77,18]

// print out the even numbers

// filter in
// let evenNumbers = numbers.filter(num => num % 2 === 0)
// filter looks for boolean

// console.log(evenNumbers)

let words = ['cake', null, 'pudding', null, 'misty', 'rose', null]

// console.log(words.filter(elem => elem !== null))

let scores = [3, 5, 6, 22]
//            |  |  |  |
//            v  v  v  v
//           [4, 6, 7, 23]
// one to one mapping

// add one to every players scores and get back a new array of the scores updated

let updatedScores = scores.map(score => score + 1)
// console.log(updatedScores)

// write a function lengths that takes an array of strings
// work out the length of each string and collect them in an arr
// lengths(['my', 'cake', 'pudding']) // [2, 4, 7]

function lengths(arr) {
    return arr.map(str => str.length)
}

// console.log(lengths(['my', 'cake', 'pudding']))

let numbers = [1, 2, 3, 4] // 10

// iterate through the array
//                0      1
let sum = numbers.reduce((accum, num) => {
    return accum + num //  1
}, 0) // init (initial) value the accum - remember (memo), becomes a new accumulator value after return

// console.log(sum)




// let items = [
//     { name: 'apple', type: 'fruit', full_price: 2, discount: 0 },
//     { name: 'potato', type: 'vegie', full_price: 5, discount: 0 },  
//     { name: 'banana', type: 'fruit', full_price:4, discount: 1 },
//     { name: 'orange', type: 'fruit', full_price: 3, discount: 2 },
//     { name: 'brocoli', type: 'vegie', full_price: 2, discount: 2 },
// ]
  
// calculate total price of all fruits after discount

// console.log(
//     items
//     .filter(item => item.type === 'fruit')
//     .map(fruit => fruit.full_price - fruit.discount)
//     .reduce((total, discountedPrice) => total + discountedPrice)
// )

let letters = ['a', 'p', 'p', 'l', 'e']

// built in join function to convert the array into a string with an optional separator
// use reduce

function join(arr, separator) {
    return arr
    .reduce((result, letter) => result + separator + letter)
    
}

// console.log(join(letters, '-'))


function mumble(str) {
    return str.split('')
    .map((char, index) => char.repeat(index + 1))
    .join('-')
}

// console.log(mumble('abc'))

/*
we have an array of items we need to build an sql query to insert it into the items table

*/

// map

let items = [
    { name: "apple", category: "fruit" },
    { name: "potato", category: "vegetable" },
    { name: "banana", category: "fruit" },
]
  
/*

insert into items (name, category) values 
('apple', 'fruit'), 
('potato', 'vegetable'),
('banana', 'fruit');

*/



sql = 
`insert into items (name, category) values ` + items
.map(item => `('${item.name}', '${item.category}')`)
.join(', ') + ';'

console.log(sql)


// functional programming
// object orient programming
// asynchronous js
// handling errors
// refactoring / postmortem