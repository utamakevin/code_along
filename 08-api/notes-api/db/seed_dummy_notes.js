const Note = require('../models/note.js')
const MarkdownIt = require('markdown-it')
const md = new MarkdownIt()

let notes = ['note one', 'we **love** CSS', 'note three']

notes.forEach(note => {
    Note.create({ content: note })
})

