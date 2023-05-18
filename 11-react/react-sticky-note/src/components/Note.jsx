import './Note.css'
import { useState } from 'react'
import { deleteNote, saveNote } from '../utils/notes_api' 

export default function Note({ note, onDelete, onUpdate }) {

  const [isEditing, setIsEditing] = useState(false)
  const [content, setContent] = useState(note.content)
  // const [html, setHtml] = useState(note.content_html)

  const handleToggleEdit = () => {
    setIsEditing(!isEditing)
  }

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = () => {
    saveNote({ id: note.id, content })
      .then(res => {
        setIsEditing(false)
        // setHtml(res.content_html)
      })

    // axios.put(`/api/notes/${note.id}`, { note })
  }

  const handleDelete = e => {
    deleteNote(note.id).then(res => onDelete(note.id))
  } 

  return (
    <div className="note-wrapper">
      <span onClick={handleDelete} className="delete-btn"></span>
      <article onDoubleClick={handleEdit} className={`note ${note.hex_colour.slice(1)}`}>
        {isEditing ? 
          <textarea onChange={e => setContent(e.target.value)} value={content}></textarea> 
          : 
          <div 
          dangerouslySetInnerHTML={{ __html: note.content_html}} 
          className="content">
        </div>}
      </article>
      <footer>
        <button onClick={handleToggleEdit}>
          {isEditing ? "Cancel" : "Edit"}
        </button>
        {isEditing && <button disabled={note.content === content} onClick={handleSave}>
          Save
        </button>}
      </footer>
    </div>
  )
}