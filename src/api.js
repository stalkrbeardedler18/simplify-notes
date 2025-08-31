const API_URL = '/notes';

export const getNotes = async () => {
  const response = await fetch(API_URL);
  return await response.json();
};

export const createNote = async (note) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(note),
  });
  return await response.json();
};

export const deleteNote = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
};