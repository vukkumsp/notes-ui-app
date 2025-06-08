import './App.css'
import Header from './components/header/Header';
import { useEffect, useState } from 'react';
import { TEST_API_URL, NOTES_API_URL } from './services/rest/RESTAPI';
import Footer from './components/footer/Footer';
import Note from './components/note/Note';
import { getNotes } from './services/rest/noteService';

function App() {
  const [test, setTest] = useState([]);

  useEffect(() => {
    getNotes()
      .then(response => {
        setTest(response);
        console.log(response);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <h2>Welcome to the Notes App</h2>
        <h3>Response : </h3>{test?
         
          test.map((note, index) => (
            <Note key={index} id={note.id} content={note.content} />
          ))
        
        : <h3>Loading...</h3>}
        <p>This is a simple application to manage your notes.</p>
        <p>Feel free to add, edit, and delete notes as you wish.</p>
        
        </div>
      <Footer />
    </>
  )
}

export default App
