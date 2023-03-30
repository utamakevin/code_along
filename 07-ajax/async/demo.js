// most functions are fast, returning from the function = we are certain the task is complete.

    // function square(number) {
    //     return number * number
    // }

    // let result = square(5)
    // console.log(result)

    // let randomNum = Math.random()
    // console.log(randomNum)

    // let str = 'hello'.replace('o', '')
    // console.log(str)

    // let arr = [1, 2, 3]
    // arr.reverse()
    // console.log(arr)

// recently, there have been a group of functions that is not quiet like that

    // db.query(sql, callback)

    // fs.readFile(filename, callback)

    // omdb.findOneByTitle(title, callback)

    // setTimeout(callback, miliseconds)

// they get kind of harder to deal with

// would be nice if js works like this, but it doesn't

    // let movie = omdb.findOneByTitle(title)

    // db.query('INSERT INTO users (email) VALUES ('dt@ga.co');')
    // db.query('SELECT * FROM users WHERE id= ' + newUser.id)

const omdbWrapper = require('omdb-api-search')
const omdb = omdbWrapper.createClient('2f6435d9')

omdb.findOneByTitle('jaws', (err, res) => {
    console.log(res)
})