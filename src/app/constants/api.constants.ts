import { environment } from "../environment";

const BASE_URL =  environment.notesBaseUrl;
const USER_MGMT_URL = environment.userMgmtUrl;

export const API_URLS = {
    AUTH: {
        LOGIN: `${USER_MGMT_URL}/auth/login`,
        REGISTER: `${USER_MGMT_URL}/auth/register`,
        LOGOUT: `${USER_MGMT_URL}/auth/logout`,
        REFRESH_TOKEN: `${USER_MGMT_URL}/auth/refresh-token`,
        PROFILE: `${USER_MGMT_URL}/auth/profile`,
    },
    NOTES: {
        GET_ALL: `${BASE_URL}/api/notes`,
        GET_BY_ID: (id: string) => `${BASE_URL}/api/notes/${id}`,
        CREATE: `${BASE_URL}/api/notes`,
        UPDATE: (id: string) => `${BASE_URL}/api/notes/${id}`,
        DELETE: (id: string) => `${BASE_URL}/api/notes/${id}`,
    },
    USERS: {
        GET_ALL: `/api/users`,
        GET_BY_ID: (id: string) => `/api/users/${id}`,
        UPDATE: (id: string) => `/api/users/${id}`,
        DELETE: (id: string) => `/api/users/${id}`,
    }
};

export const NOTES_API_URL = `${BASE_URL}/api/notes`;
export const USER_API_URL = `${USER_MGMT_URL}/api/users`;
export const AUTH_API_URL = `${USER_MGMT_URL}/api/auth`;
export const AUTH_LOGIN_URL = `${AUTH_API_URL}/login`;