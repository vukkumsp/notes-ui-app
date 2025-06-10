import { Route, Routes } from 'react-router-dom';
import './App.css'
import HomeView from './views/home-view/HomeView';
import NoteView from './views/note-view/NoteView';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/notes/:id" element={<NoteView />} />
      </Routes>
    </>
  )
}

export default App
