const db = require("../db")
const bcrypt = require("bcrypt")

function create(email, password) {
  const sql = `
        insert into users (email, password_digest) 
        values ($1, $2) returning *;
    `

  return bcrypt
    .genSalt(10)
    .then(salt => bcrypt.hash(password, salt))
    .then(hash => db.query(sql, [email, hash]))
}

function findOneByEmail(email) {
  const sql = `
    select * from users
    where email = $1
    `

  return db.query(sql, [email]).then(res => res.rows[0])
}

module.exports = {
  create,
  findOneByEmail
}
