import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Note from '../../components/note/Note';
import './NoteView.css'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCookie, setCookie } from '../../services/cookieManagement';
import { getGuestToken } from '../../services/rest/authService';
import { getNote, getNotes } from '../../services/rest/noteService';

function NoteView() {
  const { id } = useParams();
  const [note, setNote] = useState({
    id: id,
    title: "Loading...",
    content: "Please wait while we fetch the note.",
    createdAt: "",
    updatedAt: ""
  });

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

      if(id==='add'){
        console.log("Note id is 'add', redirecting to create new note...");
        setNote({
          id: null,
          title: "New Note",
          content: "This is a new note. Please edit it.",
          createdAt: new Date().toISOString(),
          updatedAt: ""
        });
      }
      else {
        setTimeout(() => {
          console.log("Fetching note with id "+id+" ...");
              getNote(id)
          .then(response => {
            setNote(response);
            console.log(response);
          })
          .catch(error => console.error(error));
        }
        , 1000);
      }

      }, []);

  return (
    <>
        <Header />
        { id === 'add' ?
          <Note key={id} note={note} mode='add'/>:
          <Note key={id} note={note} />  
        }
        <Footer />
    </>
  )
}

export default NoteView
