// services/rest/noteService.js
import { NOTES_API_URL } from './RESTAPI';

export async function getNotes() {
  const response = await fetch(NOTES_API_URL);
  
  if (!response.ok) {
    throw new Error('Network error');
  }

  return response.json();
}
