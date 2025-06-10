import './App.css'
import Header from './components/header/Header';
import { useEffect, useState } from 'react';
import { TEST_API_URL, NOTES_API_URL } from './services/rest/RESTAPI';
import Footer from './components/footer/Footer';
import Note from './components/note/Note';
import { getNotes } from './services/rest/noteService';
import { getGuestToken } from './services/rest/authService';
import { getCookie, setCookie } from './services/cookieManagement';

function App() {
  const [test, setTest] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = getCookie("guestToken");
    if (token !== null && token !== "") {
      setToken(token);
      console.log("Token from cookie: ", token);
    } else {
      console.log("No token found in cookies, fetching new guest token...");
      getGuestToken()
        .then(response => {
          console.log("Guest Token: ", response);
          setToken(response.token);
          setCookie("guestToken", response.token, response.duration-10);
        })
        .catch(error => console.error("Error fetching guest token:", error));
    }
    //-------------------------------------------//
    setTimeout(() => {
      console.log("Fetching notes...");
          getNotes()
      .then(response => {
        setTest(response);
        console.log(response);
      })
      .catch(error => console.error(error));
    }
    , 1000);
    }, []);

  return (
    <>
      <Header />
      <div className="container">
        {test?
         
          test.map((note, index) => (
            <div className="note-container" key={index}>
              <Note key={index} note={note} />
            </div>
          ))
        
        : <h3>Loading...</h3>}
        
        </div>
      <Footer />
    </>
  )
}

export default App
