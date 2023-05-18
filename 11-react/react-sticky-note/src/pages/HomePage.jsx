import { useEffect, useState } from "react"
import Note from "../components/Note"
import './HomePage.css'


export default function HomePage({ user }) {
    const [notes, setNotes] = useState([])

    const deleteNote = id => {
        setNotes(notes.filter(n => n.id !== id))
    }

    const updateNote = newNote => {
        setNotes(notes.map(n => n.id === newNote.id ? {...n, ...newNote} : n))
    }

    useEffect(() => {
        fetch('/api/notes')
        .then(res => res.json())
        .then(setNotes)
    }, [])


    return (
        <main>
            <div className="header">
                <h1>Home Page</h1>
            </div>

            <section className="note-section"> 
                {notes.map(note => (
                    <Note onUpdate={updateNote} onDelete={deleteNote} key={note.id} note={note}/>
                ))}
            </section>
        </main>
    )
}