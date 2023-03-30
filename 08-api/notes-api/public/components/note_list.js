import { fetchNotes, saveNote } from '../notes_api.js'

const noteListSection = document.querySelector('.note-list')

noteListSection.addEventListener('click', handleDelete)
noteListSection.addEventListener('dblclick', handleEdit)
noteListSection.addEventListener('click', handleCancel)
noteListSection.addEventListener('click', handleSave)

function handleSave(event) {
    if(!event.target.classList.contains('save-btn')) return

    let noteElem = event.target.closest('.note')
    let textArea = noteElem.querySelector('textarea')

    saveNote(noteElem.dataset.id, textArea.value)
        .then(fetchNotes)
        .then(renderNoteList)
}

function handleEdit(event) {
    if(event.target.tagName === "BUTTON") return
    // we need to the note that the user want to edit
    if(event.target.closest('.note')) {
        let noteElem = event.target.closest('.note')
        noteElem.classList.add('edit')
    }
}

function handleCancel(event) {
    if(!event.target.classList.contains('cancel-btn')) return
    let noteElem = event.target.closest('.note')
    noteElem.classList.remove('edit')
}

function handleDelete(event) {
    if(!event.target.classList.contains('delete-btn')) return

    // if you get to this line i know you clicked on a delete button
    // DOM traversal - move up
    let noteElem = event.target.closest('.note') // closest ancestor that is a .note
    // console.log(noteElem.dataset.id)
    axios.delete(`/api/notes/${noteElem.dataset.id}`)
        .then(res => noteElem.remove())
}

export function renderNoteList(notes) {
    noteListSection.innerHTML = notes.map(note => renderNote(note)).join('')
}

function renderNote(note) {
    return `
    <article data-id="${note.id}" class="note">
        <div class="content" style="background-color: ${note.hex_colour}">${note.content_html}</div>
        <textarea>${note.content}</textarea>
        <footer>
            <button class="save-btn">save</button>
            <button class="cancel-btn">cancel</button>
            <button class="delete-btn">remove</button>
        </footer>
    </article>
    `
}

fetchNotes()
    .then(renderNoteList)

    // long way version
// fetchNotes()
//  .then(note => renderNoteList(note))