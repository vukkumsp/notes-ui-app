// services/rest/noteService.js
import { getCookie } from '../cookieManagement';
import { NOTES_API_URL } from './RESTAPI';

export async function getNotes() {
  const token = getCookie("guestToken");
  if (!token) {
    throw new Error('No guest token found');
  }
  // Fetch notes from the API
  // You might want to include the token in the headers if required by your API
  const headers = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  };
  // Fetch notes from the API 
  const response = await fetch(NOTES_API_URL, { 
    method: 'GET',
    mode: 'cors', // Uncomment if you need CORS support
    credentials: 'include', // Include credentials if needed
    headers : headers
  });
  // const response = await fetch(NOTES_API_URL);
  
  if (!response.ok) {
    throw new Error('Network error');
  }

  return response.json();
}

export async function getNote(id) {
  const token = getCookie("guestToken");
  if (!token) {
    throw new Error('No guest token found');
  }
  // Fetch notes from the API
  // You might want to include the token in the headers if required by your API
  const headers = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  };
  // Fetch notes from the API 
  const response = await fetch(NOTES_API_URL+"/"+id, { 
    method: 'GET',
    mode: 'cors', // Uncomment if you need CORS support
    credentials: 'include', // Include credentials if needed
    headers : headers
  });
  // const response = await fetch(NOTES_API_URL);
  
  if (!response.ok) {
    throw new Error('Network error');
  }

  return response.json();
}

export async function addOrUpdateNote(note, method) {
  const token = getCookie("loginToken");
  if (!token) {
    throw new Error('No login token found');
  }
  // Fetch notes from the API
  // You might want to include the token in the headers if required by your API
  const headers = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  };
  // Fetch notes from the API 
  const response = await fetch(NOTES_API_URL, { 
    method: method,
    mode: 'cors', // Uncomment if you need CORS support
    credentials: 'include', // Include credentials if needed
    headers : headers,
    body: JSON.stringify(note)
  });
  // const response = await fetch(NOTES_API_URL);
  
  if (!response.ok) {
    throw new Error('Network error');
  }

  return response.json();
}