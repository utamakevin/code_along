const express = require("express")
const app = express()
const config = require("./config")
const validateId = require('./middlewares/validate_id.js')
const errorHandler = require('./middlewares/error_handler.js')
const validateNewNote = require('./middlewares/validate_new_note.js')
const cors = require('cors')
const Note = require('./models/note.js')


// app.use(cors())
app.use(express.static("public"))
app.use(express.json()) // expecting request to have body in the format of json - parsenit

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



app.get("/api/notes", (req, res) => {
  Note.findAll().then(notes => res.json(notes))
})


app.get("/api/notes/:id", validateId, (req, res, next) => {
  Note.findOneById(req.params.id)
    .then(note => res.json(note))
    .catch(next)
})

app.post('/api/notes', validateNewNote, (req, res) => {
  Note.create({ content: req.body.content }).then(note => res.json(note))
})

app.delete('/api/notes/:id', (req, res) => {
  const { id } = req.params
  Note.destroy(id).then(() => 
      res.json({ message: `note with id ${id} has been removed` })
    )
})

app.put('/api/notes/:id', (req, res) => {

  const { id } = req.params
  Note.update(id, req.body).then(note =>
    res.json({
      message: `note with id ${note.id} has been successfully updated`
    })
  )
})


app.use(errorHandler)



app.listen(config.port, () => {
  console.log(`listening on port ${config.port}`)
})
