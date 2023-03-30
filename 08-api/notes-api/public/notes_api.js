

export function fetchNotes() {
    return axios.get('/api/notes').then(res => res.data)
}

export function deleteNote(id) {

}

export function saveNote(id, content) {
    return axios.put(`/api/notes/${id}`, { content })
}