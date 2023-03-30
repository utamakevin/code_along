// template
// bluepring
// fish god
// factory - for creating fish objects

class Fish {
    constructor() {
        this.health = 10
    }

    eat() {
        this.health += 5
    }
}


let fish1 = new Fish()
let fish2 = new Fish()

console.log(fish1, fish2)

fish1.eat() // will run the eat function

console.log(fish1)
// fish1.flyKick() // does not exist