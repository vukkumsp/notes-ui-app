// services/rest/noteService.js
import { getCookie } from '../cookieManagement';
import { LOGIN_API_URL, NOTES_API_URL, TOKEN_GUEST_URL } from './RESTAPI';

export async function getGuestToken() {
  const response = await fetch(TOKEN_GUEST_URL);
  
  if (!response.ok) {
    throw new Error('Network error');
  }

  return response.json();
}

export async function getLoginToken(username, password) {
  const token = getCookie("guestToken");
  if (!token) {
    throw new Error('No guest token found');
  }
  const response = await fetch(LOGIN_API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    credentials: 'include', // Include credentials if needed
    body: JSON.stringify({
      username: username,
      password: password
    })
  });

  if (!response.ok) {
    throw new Error('Network error');
  }

  return response.json();
}