const { Client } = require("pg") // need to save to database

const bcrypt = require("bcrypt")

const db = new Client({
  database: "goodfoodhunting",
  user: 'postgres',
  password: 'password'
})

db.connect()

const email = "dt@ga.co"
const plainTextPassword = "pudding"

const insertQuery = 'insert into users (email) values ($1, $2);'



genSalt(10)
.then(salt => hash(plainTextPassword, salt))
.then(hashed => query(insertQuery, [email, hashed]))
.then(res => end())



// bcrypt
//     .genSalt(10)
//         .then(salt => {
//             return bcrypt.hash(plainTextPassword, salt)
//         })
//         .then(hashed => {
//             let insertQuery = `
//             INSERT INTO users (email, password_digest)
//             VALUES ('${email}', '${hashed}');
//             `
//             return db.query(insertQuery)
//         })
//         .then(res => {
//             db.end()
//         })



// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(plainTextPassword, salt, (err, digestedPassword) => {
//     // the digested password is what we want to save in db

//     const sql = `
//       INSERT INTO users (email, password_digest)
//       VALUES ('${email}', '${digestedPassword}');
//     `

//     db.query(sql, (err, dbRes) => {
//       console.log(err)
//       db.end()
//     })
//   })
// })