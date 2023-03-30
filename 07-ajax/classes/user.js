class User {
    // magical function that gets run when you call new
    constructor(firstname, lastname) {
        // the object that we are about to make is going to have a firstname property
        // how do we refer to that future object that we have yet to make 

        if(lastname === undefined) {
            throw new Error('lastname is required')
        }

        this.firstname = firstname
        this.lastname = lastname
    }

    // getter - property - syntax sugar - called as a property (no brackets)
    get fullname() {
        return `${this.firstname} ${this.lastname}`
    }

    // function - need to be called as a function (with brackets)
    // fullname() {
    //     return `${this.firstname} ${this.lastname}`
    // }

    intro() {
        return `hi there friend, my name is ${this.firstname}`
    }
}

module.exports = User