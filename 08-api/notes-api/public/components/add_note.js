import { renderNoteList } from './note_list.js'
import { fetchNotes } from "../notes_api.js"


const addNoteSection = document.querySelector('.add-note')
const form = addNoteSection.querySelector('form')
const textArea = addNoteSection.querySelector('textarea')


form.addEventListener('submit', handleAddNote)

function handleAddNote(e) {
    e.preventDefault()

    axios.post('/api/notes', { content: textArea.value })
        .then(fetchNotes)
        .then(renderNoteList)
}