import notesData from './notesData.js';
import "./card.js";
import "./app-bar.js";
import "./note-form.js";

const container = document.getElementById("mainNotesContainer");

function renderNotes(notes) {
  container.innerHTML = "";
  notes.forEach(note => {
    const card = document.createElement("my-note");
    card.setAttribute("id", note.id);
    card.setAttribute("title", note.title);
    card.setAttribute("body", note.body);
    card.setAttribute("createdAt", note.createdAt);
    card.setAttribute("archived", note.archived);
    container.appendChild(card);
  });
}

renderNotes(notesData);

document.addEventListener("note-added", (e) => {
  notesData.push(e.detail);
  renderNotes(notesData);
});
