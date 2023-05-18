import axios from "axios"
import { getToken } from "./users_service"

export function saveNote(note) {
  return fetch(`/api/notes/${note.id}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(note),
  }).then(res => res.json())
}

export function deleteNote(id) {
  return fetch(`api/notes/${id}`, {
    method: "delete",
  }).then(res => res.json())
}

export function fetchNotes() {
  return axios
    .get("/api/notes", {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    })
    .then(res => res.data)
}
