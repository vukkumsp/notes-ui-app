import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Note from '../../components/note/Note';
import './HomeView.css';
import { useEffect, useState } from 'react';
import { getNotes } from '../../services/rest/noteService';
import { getGuestToken } from '../../services/rest/authService';
import { getCookie, setCookie } from '../../services/cookieManagement';
import { useNavigate } from 'react-router-dom';


function HomeView() {
  const [noteList, setNoteList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = getCookie("guestToken");
    if (token !== null && token !== "") {
      console.log("Token from cookie: ", token);
    } else {
      console.log("No token found in cookies, fetching new guest token...");
      getGuestToken()
        .then(response => {
          console.log("Guest Token: ", response);
          setCookie("guestToken", response.token, response.duration-10);
        })
        .catch(error => console.error("Error fetching guest token:", error));
    }
    //-------------------------------------------//
    setTimeout(() => {
      console.log("Fetching notes...");
          getNotes()
      .then(response => {
        setNoteList(response);
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
        {noteList?
          noteList.map((note, index) => (
            <div className="note-container" key={index}>
              <Note key={index} note={note} 
                onClick={() => {
                  console.log("Navigating to note with id: ", note.id);
                  navigate('/note/' + note.id, { replace: true });
                }}
              />
              
            </div>
          ))
        
        : <h3>Loading...</h3>}
        
        </div>
      <Footer />
    </>
  )
}

export default HomeView
