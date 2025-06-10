// services/rest/noteService.js
import { NOTES_API_URL, TOKEN_GUEST_URL } from './RESTAPI';

export async function getGuestToken() {
  const response = await fetch(TOKEN_GUEST_URL);
  
  if (!response.ok) {
    throw new Error('Network error');
  }

  return response.json();
}
