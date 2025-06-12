import { Route, Routes } from 'react-router-dom';
import './App.css'
import HomeView from './views/home-view/HomeView';
import NoteView from './views/note-view/NoteView';
import LoginView from './views/login-view/LoginView';
import { useEffect } from 'react';
import { getCookie, setCookie } from './services/cookieManagement';
import { getGuestToken } from './services/rest/authService';

function App() {

  useEffect(() => {
    const token = getCookie("guestToken");
    if (token !== null && token !== "") {
      console.log("Guest Token from cookie: ", token);
    } else {
      console.log("No token found in cookies, fetching new guest token...");
      getGuestToken()
        .then(response => {
          console.log("Guest Token: ", response);
          setCookie("guestToken", response.token, response.duration - 10);
        })
        .catch(error => console.error("Error fetching guest token:", error));
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/notes/:id" element={<NoteView />} />
        <Route path="/login" element={<LoginView />} />
      </Routes>
    </>
  )
}

export default App
