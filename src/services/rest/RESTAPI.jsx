/**
 * REST API URL constants for the Notes UI App
 */

export const DEPLOYED_BASE_URL = 'https://notes-service-iwwy.onrender.com';
export const LOCAL_BASE_URL = 'http://localhost:8080';
export const BASE_URLS = [DEPLOYED_BASE_URL, LOCAL_BASE_URL];

// Uncomment the line below to use the local base URL instead of the production one
export const BASE_URL = BASE_URLS[1];

export const API_BASE_URL = `${BASE_URL}/api`;

export const TEST_API_URL = `${API_BASE_URL}/test`;
export const NOTES_API_URL = `${API_BASE_URL}/notes`;

export const TOKEN_BASE_URL = `${API_BASE_URL}/token`;
export const TOKEN_GUEST_URL = `${TOKEN_BASE_URL}/guest`;
// export const AUTH_API_URL = `${API_BASE_URL}/auth`;

// Add more endpoints as needed