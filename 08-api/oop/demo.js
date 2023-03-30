// class
// blueprint
// template
// factory
// god
// way arrange your code
// breaking large chunks of code into smaller piece
// structure
// reuse

class Car {
    constructor(make, year, colour) {
        this.make = make
        this.year = year
        this.colour = colour
    }

    
}

let c1 = new Car('tesla', 2023, 'red')
let c2 = new Car('tesla', 2023, 'blue')

class Todo {
    constructor(content) {
        this.content = content
        this.createdAt = new Date()
        this.isCompleted = false
    }

    toggleComplete() {
        this.isCompleted = !this.isCompleted
    }
}


let t1 = new Todo('have lunch')
let t2 = new Todo('have a snack')

t2.isCompleted = true // to low of a level api


t2.toggleComplete()

// console.log(t1, t2)

// OOP - encapsulation


class Fan {
    #rpm

    constructor() {
        this.#rpm = 0
    }

    low() {
        this.#rpm = 100
    }

    high() {
        this.#rpm = 200
    }

    off() {
        this.#rpm = 0
    }


}

// let f1 = new Fan()
// f1.low()

// OOP - inheritance
// OOP - polymorphism


// parent class = super class
class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    calcArea() {
        return this.width * this.height
    }
}

class Square extends Rectangle {
    constructor(width) {
        super(width, width)
    }

    setArea(area) { // to call use - s1.setArea(25)
        this.width = Math.sqrt(area)
        this.height = Math.sqrt(area)
    }

    set area(area) { // to call use - s1.area = 25
        this.width = Math.sqrt(area)
        this.height = Math.sqrt(area)
    }
}

let r1 = new Rectangle(3, 4)
// console.log(r1)
let r2 = new Rectangle(5, 2)
// console.log(r2)

let s1 = new Square(4)

s1.setArea(25)

// console.log(s1)
// console.log(s1.calcArea())
// console.log(Rectangle.calcArea())









// shop - shopping cart

// let cart = [
//     {name: 'nutella', price: 5, quantity: 3},
//     {name: 'butter', price: 15, quantity: 10},
// ]


// let cart = new Cart()

// cart.add(item)
// cart.add(item)
// cart.add(item)

// cart.totalPrice // 165
// cart.count // 13







