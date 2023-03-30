// database
const { Client } = require("pg")

const db = new Client({
    database: "goodfoodhunting",
    user: 'postgres',
    password: process.env.PASSWORDGFH
  })
  
db.connect()

// problem - insert a new user
// and then select the user back after it's been insert


let insertQuery = `insert into users (email) values ('test@test.com') returning id;`

let selectQuery = `select * from users where id=$1`

// tell the db to insert this record

// wait for it to finish to actually select it back with a new user id

db
.query(insertQuery)
.then(res => {
    return db.query(selectQuery, [res.rows[0].id])
})
.then(res => {
    console.log(res.rows)
    db.end()
})