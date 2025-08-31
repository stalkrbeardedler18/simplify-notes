import { getNotes, createNote, deleteNote } from './api.js';

const noteList = document.getElementById('note-list');
const noteInput = document.getElementById('note-input');

const renderNotes = async () => {
  const notes = await getNotes();
  noteList.innerHTML = '';
  notes.forEach(note => {
    const li = document.createElement('li');
    li.textContent = note.content;
    li.appendChild(createDeleteButton(note.id));
    noteList.appendChild(li);
  });
};

const createDeleteButton = (id) => {
  const button = document.createElement('button');
  button.textContent = 'Delete';
  button.onclick = async () => {
    await deleteNote(id);
    renderNotes();
  };
  return button;
};

document.getElementById('add-note').onclick = async () => {
  const noteContent = noteInput.value;
  await createNote({ content: noteContent });
  noteInput.value = '';
  renderNotes();
};

// Initial rendering
renderNotes();