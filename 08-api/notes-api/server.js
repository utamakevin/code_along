const express = require("express")
const app = express()
const config = require("./config")
const validateId = require("./middlewares/validate_id.js")
const errorHandler = require("./middlewares/error_handler.js")
const validateNewNote = require("./middlewares/validate_new_note.js")
const cors = require("cors")
const Note = require("./models/note.js")
const User = require("./models/user")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const hasLoggedIn = require("./middlewares/has_logged_in")

function checkToken(req, res, next) {
  // lets look inside the request header for a jwt
  // "Authorization": "Bearer asdasdasadsdwasafsdfwe"

  let token = req.get("Authorization") || req.query.token

  if (token) {
    token = token.replace("Bearer ", "")

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      console.log(err)
      console.log(decoded)
      req.user = err ? null : decoded.user
      return next()
    })
  } else {
    req.user = null
    next()
  }
}

// app.use(cors())
app.use(express.static("public"))
app.use(express.json()) // expecting request to have body in the format of json - parsenit
app.use(checkToken)

// endpoint - CRUD - restful conventions - restful api - http verbs/methods
// get    /api/notes
// get    /api/notes/:id
// post   /api/notes
// put    /api/notes/:id
// delete /api/notes/:id

// app.get("/api/notes", (req, res) => {
//   let note = notes[0]
//   res.json(note)
// })

/*
post /api/notes


{
  "id": 7,
  "content": "we are winning"
}

*/

app.get("/api/notes", (req, res, next) => {
  Note.findAll()
    .then(notes => res.json(notes))
    .catch(next)
})

app.get("/api/notes/:id", validateId, (req, res, next) => {
  Note.findOneById(req.params.id)
    .then(note => res.json(note))
    .catch(next)
})

app.post("/api/notes", validateNewNote, (req, res, next) => {
  Note.create({ content: req.body.content })
    .then(note => res.json(note))
    .catch(next)
})

app.delete("/api/notes/:id", (req, res, next) => {
  const { id } = req.params
  Note.destroy(id)
    .then(() => res.json({ message: `note with id ${id} has been removed` }))
    .catch(next)
})

app.put("/api/notes/:id", (req, res, next) => {
  Note.update(req.params.id, req.body)
    .then(note => res.json(note))
    .catch(next)
})

function createJsonWebToken(data) {
  return jwt.sign(data, process.env.SECRET, { expiresIn: "24h" })
}

app.post("/api/login", async (req, res, next) => {
  // user hand over their email & password
  const { email, password } = req.body

  try {
    // server checks email & password
    // find user by email
    let user = await User.findOneByEmail(email)

    let match = await bcrypt.compare(password, user.password_digest)

    if (!match) throw new Error("invalid email or password")

    let token = createJsonWebToken(user)

    res.json(token)
  } catch (err) {
    console.log(err)
    next(err)
  }

  // User.findOneByEmail(email)
  //   .then(user => Promise.all([bcrypt.compare(email, user.email), user]))
  //   .then(match => {
  //     if (match) {
  //       let token = jwt.sign(payload, process.env.SECRET, { expiresIn: '24h' })
  //       return
  //     }

  //     throw new Error(400, 'invalid email or password')
  //   })
  //   .catch(next)
  // hash the password and compare
  // bcrypt.compare()

  // create a json web token, hand it out to the client
  // token = createJsonWebToken()

  // res.json(token)

  // give them a token to keep and to bring back

  // json web token

  // invalid email or password
})

app.use(errorHandler)

app.listen(config.port, () => {
  console.log(`listening on port ${config.port}`)
})
