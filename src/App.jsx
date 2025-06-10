import './App.css'
import Header from './components/header/Header';
import { useEffect, useState } from 'react';
import { TEST_API_URL, NOTES_API_URL } from './services/rest/RESTAPI';
import Footer from './components/footer/Footer';
import Note from './components/note/Note';
import { getNotes } from './services/rest/noteService';
import { getGuestToken } from './services/rest/authService';
import { getCookie, setCookie } from './services/cookieManagement';
import HomeView from './views/home-view/HomeView';

function App() {

  return (
    <>
      <HomeView />
    </>
  )
}

export default App
